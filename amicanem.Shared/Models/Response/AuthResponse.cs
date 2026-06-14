using MessagePack;

namespace amicanem.Shared.Models.Response;

[MessagePackObject]
public class AuthResponse
{
     [Key(0)] public int Id { get; set; } 
     [Key(1)] public required string Email { get; set; }
     [Key(2)] public required string DisplayName { get; set; }
     [Key(3)] public required string Nickname { get; set; }
     [Key(4)] public required string PictureUrl { get; set; }
     [Key(5)] public string AccessToken { get; set; } = string.Empty; 
     [Key(6)] public string RefreshToken { get; set; } = string.Empty;
}