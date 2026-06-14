namespace amicanem.Shared.Service.Auth;

public interface IAuthService
{
    Task<bool> Login(string email, string password, string platform, CancellationToken cancellationToken = default);
    Task ExternalLogin(string baseUrl, string returnUrl, string provider);
    Task Logout(string? email, CancellationToken cancellationToken = default);
    Task InitializeAsync(CancellationToken cancellationToken = default);
}