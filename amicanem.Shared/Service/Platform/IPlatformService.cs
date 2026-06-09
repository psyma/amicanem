namespace amicanem.Shared.Service.Platform;

public interface IPlatformService
{
    public bool IsMobile { get; }
    public bool IsWeb { get; }
    public string PlatformName { get; }
}