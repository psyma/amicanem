using SQLite;

namespace amicanem.Shared.Models.Sqlite;

public class AuthUser
{
    [PrimaryKey, AutoIncrement]
    public int Id { get; set; }
    public string Email { get; set; } = string.Empty;
    public string DisplayName { get; set; } = string.Empty;
    public string? Nickname { get; set; } = string.Empty;
    public string? PictureUrl { get; set; } = string.Empty;
    public string AccessToken { get; set; } = string.Empty;
    public string? RefreshToken { get; set; } = string.Empty;
}