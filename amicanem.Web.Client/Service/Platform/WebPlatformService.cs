using amicanem.Shared.Service.Platform;

namespace amicanem.Web.Client.Service.Platform;

public class WebPlatformService : IPlatformService
{
    public bool IsMobile => false;
    public bool IsWeb => true;

    public string PlatformName => "Web";
}