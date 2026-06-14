using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using amicanem.Shared.Models.Response;
using amicanem.Shared.Models.User;
using amicanem.Web.Data;
using amicanem.Web.Email;
using amicanem.Web.Models.Settings;
using amicanem.Web.Services.JwtToken;
using Microsoft.AspNetCore.Authentication.Google;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

using LoginRequest = amicanem.Shared.Models.Request.LoginRequest;
using RefreshRequest = amicanem.Shared.Models.Request.RefreshRequest;

namespace amicanem.Web.Controllers;

[ApiController]
[Route("api/[controller]")]
[Produces("application/x-msgpack")]
public class AuthController : Controller
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly SignInManager<ApplicationUser> _signInManager;
    private readonly JwtSettings _jwtSettings; 
    private readonly IJwtTokenService _jwtTokenService;
    private readonly ICustomEmailSender<ApplicationUser> _emailSender;
    private readonly IDbContextFactory<ApplicationDbContext> _dbContextFactory;
    
    public AuthController(
        UserManager<ApplicationUser> userManager, 
        SignInManager<ApplicationUser> signInManager, 
        IOptions<JwtSettings> jwtSettings,
        IJwtTokenService jwtTokenService, 
        ICustomEmailSender<ApplicationUser> emailSender,
        IDbContextFactory<ApplicationDbContext> dbContextFactory)
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _jwtSettings = jwtSettings.Value;
        _jwtTokenService = jwtTokenService;
        _emailSender = emailSender;
        _dbContextFactory = dbContextFactory;
    }
    
    [HttpPost("refresh")]
    public async Task<IActionResult> Refresh(RefreshRequest request, CancellationToken cancellationToken)
    {
        if (request.Platform == "web")
        {
            Request.Cookies.TryGetValue(_jwtSettings.RefreshCookieName, out var refreshToken);
            request.RefreshToken = refreshToken;
        }

        if (string.IsNullOrWhiteSpace(request.RefreshToken)) return Unauthorized();

        await using var dbContext = await _dbContextFactory.CreateDbContextAsync(cancellationToken);
        var hashRefreshToken = Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes(request.RefreshToken)));
        var user = await dbContext.Users.FirstOrDefaultAsync(x => x.RefreshToken == hashRefreshToken, cancellationToken);
        if (user == null || user.RefreshTokenExpiryTime <= DateTime.UtcNow) return Unauthorized();

        var accessToken = await _jwtTokenService.CreateAccessToken(user);
        var newRefreshToken = _jwtTokenService.CreateRefreshToken();
        var refreshTokenExpiry = DateTime.UtcNow.AddDays(_jwtSettings.RefreshTokenLifetimeInDays);

        var id = user.Id;
        var authResponse = new AuthResponse
        { 
            Id = id,
            Email = user.Email!,
            DisplayName = user.DisplayName!,
            Nickname = user.Nickname!,
            PictureUrl = user.PictureUrl!,
        };

        await SetUserRefreshToken(dbContext, user, newRefreshToken, refreshTokenExpiry, cancellationToken);
        switch (request.Platform)
        {
            case "web":
                SetIdCookies(id, refreshTokenExpiry);
                SetRefreshTokenCookies(newRefreshToken, refreshTokenExpiry);
                authResponse.AccessToken = accessToken;
                break;
            default:
                authResponse.AccessToken = accessToken;
                authResponse.RefreshToken = newRefreshToken;
                break;
        }

        return Ok(authResponse);
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginRequest request, CancellationToken cancellationToken)
    {
        await using var dbContext = await _dbContextFactory.CreateDbContextAsync(cancellationToken);
        var user = await dbContext.Users.FirstOrDefaultAsync(x => x.Email == request.Email, cancellationToken);
        if (user == null) return Unauthorized();

        var isPasswordMatch = await _userManager.CheckPasswordAsync(user, request.Password);
        if (!isPasswordMatch) return Unauthorized();

        var accessToken = await _jwtTokenService.CreateAccessToken(user);
        var refreshToken = _jwtTokenService.CreateRefreshToken();
        var refreshTokenExpiry = DateTime.UtcNow.AddDays(_jwtSettings.RefreshTokenLifetimeInDays);

        var id = user.Id;
        var authResponse = new AuthResponse
        {
            Id = id,
            Email = request.Email,
            DisplayName = user.DisplayName!,
            Nickname = user.Nickname!,
            PictureUrl = user.PictureUrl!,
        };

        await SetUserRefreshToken(dbContext, user, refreshToken, refreshTokenExpiry, cancellationToken);
        switch (request.Platform)
        {
            case "web":
                SetIdCookies(id, refreshTokenExpiry);
                SetRefreshTokenCookies(refreshToken, refreshTokenExpiry);
                authResponse.AccessToken = accessToken;
                break;
            default:
                authResponse.Id = id;
                authResponse.AccessToken = accessToken;
                authResponse.RefreshToken = refreshToken;
                break;
        }

        return Ok(authResponse);
    }

    [HttpPost("logout")]
    public async Task<IActionResult> Logout(string email, CancellationToken cancellationToken)
    {
        await using var dbContext = await _dbContextFactory.CreateDbContextAsync(cancellationToken);
        var user = await dbContext.Users.FirstOrDefaultAsync(x => x.Email == email, cancellationToken);
        if (user == null) return Unauthorized();
        
        user.RefreshToken = null;
        user.RefreshTokenExpiryTime = null;
        dbContext.Users.Update(user);
        await dbContext.SaveChangesAsync(cancellationToken);
        
        return Ok();
    }
    
    [HttpGet("external/callback")]
    public async Task<IActionResult> ExternalLoginCallback([FromQuery] string returnUrl, [FromQuery] string platform, CancellationToken cancellationToken)
    {
        var info = await _signInManager.GetExternalLoginInfoAsync();
        if (info == null) return BadRequest("External login failed.");
      
        var email = info.Principal.FindFirstValue(ClaimTypes.Email);
        if (string.IsNullOrEmpty(email)) return BadRequest("Email not found.");

        var pictureUrl = string.Empty;
        var displayName = info.Principal.FindFirstValue(ClaimTypes.Name);

        var provider = info.ProviderDisplayName;
        if (!string.IsNullOrEmpty(provider))
        {
            provider = provider.ToLowerInvariant();
            if (provider.Contains("google")) pictureUrl = info.Principal.FindFirstValue("picture");
            else if (provider.Contains("github")) pictureUrl = info.Principal.FindFirstValue("urn:github:avatar");
        } 
        
        var user = await _userManager.FindByEmailAsync(email);
        if (user == null)
        {
            user = new ApplicationUser
            {
                Email = email,
                UserName = email,
                EmailConfirmed = true,
                DisplayName = displayName,
                PictureUrl = pictureUrl
            };
            var password = "Password!1234"; //Utils.Utils.GenerateRandomPassword(8);
            var result = await _userManager.CreateAsync(user, password);

            if (!result.Succeeded) return BadRequest(result.Errors);
            var roleResult = await _userManager.AddToRoleAsync(user, nameof(Roles.User));
            if (!roleResult.Succeeded) return BadRequest(roleResult.Errors);
            await _emailSender.SendDefaultPasswordAsync(user, email, password, "Default password");
        }
        
        await using var dbContext = await _dbContextFactory.CreateDbContextAsync(cancellationToken);
        var accessToken = await _jwtTokenService.CreateAccessToken(user);
        var refreshToken = _jwtTokenService.CreateRefreshToken();
        var refreshTokenExpiry = DateTime.UtcNow.AddDays(_jwtSettings.RefreshTokenLifetimeInDays);
        
        await SetUserRefreshToken(dbContext, user, refreshToken, refreshTokenExpiry, cancellationToken); 

        var separator = returnUrl.Contains('?') ? "&" : "?";
        var redirectUrl = $"{returnUrl}{separator}id={user.Id}&email={email}&displayName={displayName}&nickname={Uri.EscapeDataString("Lorem ipsum")}&pictureUrl={pictureUrl}&accessToken={Uri.EscapeDataString(accessToken)}";
        switch (platform)
        {
            case "web":
                SetIdCookies(user.Id, refreshTokenExpiry);
                SetRefreshTokenCookies(refreshToken, refreshTokenExpiry);
                break;
            default:
                redirectUrl += "&refreshToken=" + Uri.EscapeDataString(refreshToken);
                break;
        }
        
        return Redirect(redirectUrl);
    }
    
    [HttpGet("external/login")]
    public IActionResult ExternalLogin([FromQuery] string provider = GoogleDefaults.AuthenticationScheme, [FromQuery] string? returnUrl = null, [FromQuery] string? platform = null)
    {
        var redirectUrl = Url.Action(nameof(ExternalLoginCallback), "Auth", new { returnUrl, platform }, Request.Scheme)!;
        var properties = _signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
        return Challenge(properties, provider);
    }

    [Authorize]
    [HttpPost("ticket")]
    public IActionResult WebsocketTicket(CancellationToken cancellationToken)
    {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
        if (string.IsNullOrEmpty(userId))
            return Unauthorized();
        
        var token = _jwtTokenService.CreateWebsocketToken(userId);
        return Ok(token);
    }

    private void SetIdCookies(int id, DateTime expiry)
    {
        Response.Cookies.Append(_jwtSettings.IdCookieName, id.ToString(), new CookieOptions
        {
            HttpOnly = true,
            Secure = true,
            SameSite = SameSiteMode.None,
            Path = "/",
            IsEssential = true,
            Expires = expiry
        });
    }
    
    private void SetRefreshTokenCookies(string refreshToken, DateTime expiry)
    {
        Response.Cookies.Append(_jwtSettings.RefreshCookieName, refreshToken, new CookieOptions
        {
            HttpOnly = true,
            Secure = true,
            SameSite = SameSiteMode.None,
            Path = "/",
            IsEssential = true,
            Expires = expiry
        });
    }
    
    private static async Task SetUserRefreshToken(ApplicationDbContext dbContext, ApplicationUser user, string refreshToken, DateTime expiry, CancellationToken cancellationToken)
    {
        user.RefreshToken = Convert.ToBase64String(SHA256.HashData(Encoding.UTF8.GetBytes(refreshToken)));
        user.RefreshTokenExpiryTime = expiry;

        dbContext.Users.Update(user);
        await dbContext.SaveChangesAsync(cancellationToken);
    }
}