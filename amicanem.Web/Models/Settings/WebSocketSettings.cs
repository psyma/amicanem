namespace amicanem.Web.Models.Settings;

public class WebSocketSettings
{
    public required string Protocol { get; set; }
    public required string Host { get; set; }
    public required int Port { get; set; }
    public required string Name { get; set; }
}