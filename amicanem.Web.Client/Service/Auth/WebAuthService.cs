using System.Net.Http.Json;
using amicanem.Shared.Models.Response;
using amicanem.Shared.Models.Sqlite;
using amicanem.Shared.Service.Auth;
using amicanem.Shared.Service.JwtAuthState;
using amicanem.Shared.Service.Platform;
using amicanem.Shared.Service.Sqlite;
using MessagePack;
using Microsoft.AspNetCore.Components;

namespace amicanem.Web.Client.Service.Auth;

public class WebAuthService : IAuthService
{
    private readonly HttpClient _httpClient;
    private readonly NavigationManager _navigationManager;
    private readonly IJwtAuthStateProvider _jwtAuthStateProvider;
    private readonly ISqliteService _sqliteService;
    private readonly IPlatformService _platformService;
    private bool IsInitialized { get; set; }

    public WebAuthService(HttpClient httpClient, NavigationManager navigationManager, IJwtAuthStateProvider jwtAuthStateProvider, ISqliteService sqliteService, IPlatformService platformService)
    {
        _httpClient = httpClient;
        _navigationManager = navigationManager;
        _jwtAuthStateProvider = jwtAuthStateProvider;
        _sqliteService = sqliteService;
        _platformService = platformService;
    }
    
    public async Task<bool> Login(string email, string password, string platform, CancellationToken cancellationToken = default)
    {
        var payload = new
        {
            Email = email,
            Password = password,
            Platform = platform
        };
        var response = await _httpClient.PostAsJsonAsync("/api/auth/login", payload, cancellationToken: cancellationToken);
        if (!response.IsSuccessStatusCode) return false;

        var contentStream = await response.Content.ReadAsStreamAsync(cancellationToken);
        var authResponse = await MessagePackSerializer.DeserializeAsync<AuthResponse?>(contentStream, cancellationToken: cancellationToken);
        if (authResponse == null) return false;
        
        _jwtAuthStateProvider.NotifyUserAuthentication(authResponse.AccessToken); 
        IsInitialized = true;
        
        var authUser = await _sqliteService.Get<AuthUser>(1);
        if (authUser == null)
        {
            authUser = new AuthUser
            {
                Email = authResponse.Email,
                DisplayName = authResponse.DisplayName,
                Nickname = authResponse.Nickname,
                PictureUrl = authResponse.PictureUrl,
                AccessToken = authResponse.AccessToken,
                RefreshToken = authResponse.RefreshToken
            };
            
            await _sqliteService.Insert(authUser);
        }
        else
        {
            authUser.Email = authResponse.Email;
            authUser.DisplayName = authResponse.DisplayName;
            authUser.Nickname = authResponse.Nickname;
            authUser.PictureUrl = authResponse.PictureUrl;
            authUser.AccessToken = authResponse.AccessToken;
            authUser.RefreshToken = authResponse.RefreshToken;
            
            await _sqliteService.Update(authUser);
        }
        
        return true;
    }
    
    public async Task Logout(string? email, CancellationToken cancellationToken = default)
    {
        await _httpClient.PostAsync($"/api/auth/logout?email={email}", null, cancellationToken);
        
        _jwtAuthStateProvider.NotifyUserLogout();
        IsInitialized = true;
    }
    
    public async Task InitializeAsync(CancellationToken cancellationToken = default)
    {
        if (IsInitialized) return;

        var success = await Refresh(cancellationToken);
        if (!success) _jwtAuthStateProvider.NotifyUserLogout();

        IsInitialized = true;
    }

    public async Task ExternalLogin(string baseUrl, string returnUrl, string provider)
    {
        var loginUrl =
            $"{baseUrl}/api/auth/external/login" +
            $"?provider=Google" +
            $"&returnUrl={returnUrl}" +
            $"&platform=web";

        _navigationManager.NavigateTo(loginUrl, forceLoad: true);
        await Task.CompletedTask;
    }
    
    private async Task<bool> Refresh(CancellationToken cancellationToken = default)
    {
        var authUser = await _sqliteService.Get<AuthUser>(1);
        if (authUser == null) return false;

        var value = new { RefreshToken = authUser.RefreshToken, Platform = _platformService.PlatformName };
        var response = await _httpClient.PostAsJsonAsync("/api/auth/refresh", value, cancellationToken: cancellationToken);
        if (!response.IsSuccessStatusCode)
            return false;
        
        var contentStream = await response.Content.ReadAsStreamAsync(cancellationToken);
        var authResponse = await MessagePackSerializer.DeserializeAsync<AuthResponse?>(contentStream, cancellationToken: cancellationToken);
        if (authResponse == null) return false;
        
        _jwtAuthStateProvider.NotifyUserAuthentication(authResponse.AccessToken);
        return true;
    }
}