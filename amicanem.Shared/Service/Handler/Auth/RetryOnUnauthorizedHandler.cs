using System.Net;
using System.Net.Http.Json;
using amicanem.Shared.Models.Response;
using amicanem.Shared.Service.JwtAuthState;
using MessagePack;

namespace amicanem.Shared.Service.Handler.Auth;

public class RetryOnUnauthorizedHandler : DelegatingHandler
{
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IJwtAuthStateProvider _jwtAuthStateProvider;

    private static readonly HttpRequestOptionsKey<bool> RetryAttemptedKey = new("RetryAttempted");

    public RetryOnUnauthorizedHandler(
        IHttpClientFactory httpClientFactory,
        IJwtAuthStateProvider jwtAuthStateProvider)
    {
        _httpClientFactory = httpClientFactory;
        _jwtAuthStateProvider = jwtAuthStateProvider;
    }

    protected override async Task<HttpResponseMessage> SendAsync(
        HttpRequestMessage request,
        CancellationToken cancellationToken)
    {
        var response = await base.SendAsync(request, cancellationToken);

        if (response.StatusCode != HttpStatusCode.Unauthorized)
            return response;

        if (request.Options.TryGetValue(RetryAttemptedKey, out var retried) && retried)
            return response;

        response.Dispose();

        var client = _httpClientFactory.CreateClient("RefreshClient");

        using var refreshResponse = await client.PostAsJsonAsync(
            "/api/auth/refresh",
            new { },
            cancellationToken);

        if (!refreshResponse.IsSuccessStatusCode)
        {
            await TryLogoutOnServer(client, cancellationToken);

            _jwtAuthStateProvider.NotifyUserLogout();

            return new HttpResponseMessage(HttpStatusCode.Unauthorized);
        }

        await using var contentStream =
            await refreshResponse.Content.ReadAsStreamAsync(cancellationToken);

        var authResponse =
            await MessagePackSerializer.DeserializeAsync<AuthResponse?>(
                contentStream,
                cancellationToken: cancellationToken);

        if (authResponse == null || string.IsNullOrWhiteSpace(authResponse.AccessToken))
        {
            _jwtAuthStateProvider.NotifyUserLogout();
            return new HttpResponseMessage(HttpStatusCode.Unauthorized);
        }

        _jwtAuthStateProvider.NotifyUserAuthentication(authResponse.AccessToken);

        var clonedRequest = await CloneHttpRequestMessageAsync(request, cancellationToken);
        clonedRequest.Options.Set(RetryAttemptedKey, true);

        return await base.SendAsync(clonedRequest, cancellationToken);
    }

    private async Task TryLogoutOnServer(HttpClient client, CancellationToken cancellationToken)
    {
        try
        {
            var authState = await _jwtAuthStateProvider.GetAuthenticationStateAsync();
            var user = authState.User;

            var email =
                user.Identity?.Name ??
                user.FindFirst(System.Security.Claims.ClaimTypes.Email)?.Value ??
                user.FindFirst("email")?.Value;

            if (string.IsNullOrWhiteSpace(email))
                return;

            await client.PostAsync(
                $"/api/auth/logout?email={Uri.EscapeDataString(email)}",
                null,
                cancellationToken);
        }
        catch
        {
            // Ignore logout failure here.
            // The local auth state will still be cleared.
        }
    }

    private static async Task<HttpRequestMessage> CloneHttpRequestMessageAsync(
        HttpRequestMessage request,
        CancellationToken cancellationToken)
    {
        var clone = new HttpRequestMessage(request.Method, request.RequestUri)
        {
            Version = request.Version,
            VersionPolicy = request.VersionPolicy
        };

        foreach (var header in request.Headers)
        {
            clone.Headers.TryAddWithoutValidation(header.Key, header.Value);
        }

        if (request.Content != null)
        {
            var ms = new MemoryStream();
            await request.Content.CopyToAsync(ms, cancellationToken);
            ms.Position = 0;

            var newContent = new StreamContent(ms);

            foreach (var header in request.Content.Headers)
            {
                newContent.Headers.TryAddWithoutValidation(header.Key, header.Value);
            }

            clone.Content = newContent;
        }

        foreach (var option in request.Options)
        {
            if (option.Key == RetryAttemptedKey.Key)
                continue;

            clone.Options.Set(new HttpRequestOptionsKey<object?>(option.Key), option.Value);
        }

        return clone;
    }
}