namespace amicanem.Shared.Models.Request;

public class RefreshRequest
{
    public string? RefreshToken { get; set; }
    public required string Platform { get; set; }
}