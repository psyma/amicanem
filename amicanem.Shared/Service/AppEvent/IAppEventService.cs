namespace amicanem.Shared.Service.AppEvent;

public interface IAppEventService
{
    public event Action? MenuClicked;
    public void RaiseMenuClicked();
}