using System.Security.Claims;
using Microsoft.AspNetCore.Components.Authorization;
using System.IdentityModel.Tokens.Jwt;

namespace amicanem.Shared.Service.JwtAuthState;

public class JwtAuthStateProvider : AuthenticationStateProvider, IJwtAuthStateProvider
{
    private string? _token;
    private ClaimsPrincipal? _user;
    private static readonly ClaimsPrincipal Anonymous = new(new ClaimsIdentity());

    public override Task<AuthenticationState> GetAuthenticationStateAsync()
    {
        return Task.FromResult(_user == null ? new AuthenticationState(Anonymous) : new AuthenticationState(_user));
    }
    
    public void NotifyUserAuthentication(string token)
    {
        _token = token;
        _user = CreateClaimsPrincipal(token);
        
        NotifyAuthenticationStateChanged(Task.FromResult(new AuthenticationState(_user)));
    }

    public void NotifyUserLogout()
    {
        _user = null;
        _token = null;

        NotifyAuthenticationStateChanged(Task.FromResult(new AuthenticationState(Anonymous)));
    }

    public bool HasRole(string role)
    {
        return _user != null && _user.IsInRole(role);
    } 

    public string? GetUserClaim(string type)
    {
        return _user?.Claims.FirstOrDefault(c => c.Type == type)?.Value;
    }

    public string? GetToken()
    {
        return _token;
    }
    
    private static ClaimsPrincipal CreateClaimsPrincipal(string token)
    {
        var handler = new JwtSecurityTokenHandler();
        var jwt = handler.ReadJwtToken(token);

        var identity = new ClaimsIdentity(jwt.Claims, "jwt");

        return new ClaimsPrincipal(identity);
    }
}