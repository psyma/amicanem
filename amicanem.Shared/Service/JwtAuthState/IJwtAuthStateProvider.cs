using Microsoft.AspNetCore.Components.Authorization;

namespace amicanem.Shared.Service.JwtAuthState;

public interface IJwtAuthStateProvider
{
     Task<AuthenticationState> GetAuthenticationStateAsync();
     void NotifyUserAuthentication(string token);
     void NotifyUserLogout();
     bool HasRole(string role);
     string? GetUserClaim(string type);
     string? GetToken();
}