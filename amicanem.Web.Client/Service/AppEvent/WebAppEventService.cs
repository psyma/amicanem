using amicanem.Shared.Service.AppEvent;

namespace amicanem.Web.Client.Service.AppEvent;

public class WebAppEventService : IAppEventService
{
    public event Action? MenuClicked;
    
    public void RaiseMenuClicked()
    {
        MenuClicked?.Invoke();
    }
}