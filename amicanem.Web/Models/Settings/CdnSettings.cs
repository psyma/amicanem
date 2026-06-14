namespace amicanem.Web.Models.Settings;

public class CdnSettings
{
    public required string Secret { get; set; }
    public required string Url { get; set; }
    public required string ClientId { get; set; }
    public required string UploadPath { get; set; }
}