using amicanem.Shared.Service.JwtAuthState;

namespace amicanem.Shared.Service.Handler.Auth;

public class AuthHeaderHandler : DelegatingHandler
{
    private readonly IJwtAuthStateProvider _jwtAuthStateProvider;
    
    public AuthHeaderHandler(IJwtAuthStateProvider jwtAuthStateProvider)
    {
        _jwtAuthStateProvider = jwtAuthStateProvider;
    }


    protected override async Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
    {
        var token = _jwtAuthStateProvider.GetToken();
        if (!string.IsNullOrWhiteSpace(token))
        {
            request.Headers.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", token);
        }

        return await base.SendAsync(request, cancellationToken);
    }
}