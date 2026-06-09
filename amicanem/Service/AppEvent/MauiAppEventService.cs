using amicanem.Shared.Service.AppEvent;

namespace amicanem.Service.AppEvent;

public class MauiAppEventService : IAppEventService
{
    public event Action? MenuClicked;

    public void RaiseMenuClicked()
    {
        MenuClicked?.Invoke();
    }
}