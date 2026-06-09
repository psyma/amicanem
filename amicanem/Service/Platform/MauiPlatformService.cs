using amicanem.Shared.Service.Platform;

namespace amicanem.Service.Platform;

public class MauiPlatformService : IPlatformService
{
    public bool IsMobile => true;
    public bool IsWeb => false;

    public string PlatformName => DeviceInfo.Platform.ToString();
}