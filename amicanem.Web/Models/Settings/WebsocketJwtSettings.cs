namespace amicanem.Web.Models.Settings;

public class WebsocketJwtSettings
{
    public required string Issuer { get; set; }
    public required string Audience { get; set; }
    public required string Secret { get; set; }
    public int ExpireInSeconds { get; set; }
}