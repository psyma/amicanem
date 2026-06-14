using amicanem.Web.Data;

namespace amicanem.Web.Services.JwtToken;

public interface IJwtTokenService
{
    Task<string> CreateAccessToken(ApplicationUser user);
    string CreateRefreshToken();
    string CreateWebsocketToken(string userId);
}