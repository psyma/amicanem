using amicanem.Service.AppEvent;
using amicanem.Service.Platform;
using amicanem.Service.Sqlite;
using amicanem.Shared.Service.AppEvent;
using amicanem.Shared.Service.Platform;
using amicanem.Shared.Service.Sqlite;
using Microsoft.Extensions.Logging;
using MudBlazor.Services;

namespace amicanem;

public static class MauiProgram
{
    public static MauiApp CreateMauiApp()
    {
        var builder = MauiApp.CreateBuilder();
        builder
            .UseMauiApp<App>()
            .ConfigureFonts(fonts => { fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular"); });

        builder.Services.AddMauiBlazorWebView();
        builder.Services.AddMudServices();

        builder.Services.AddSingleton<IPlatformService, MauiPlatformService>();
        builder.Services.AddSingleton<IAppEventService, MauiAppEventService>();
        builder.Services.AddSingleton<ISqliteService, MauiSqliteService>();

#if DEBUG
        builder.Services.AddBlazorWebViewDeveloperTools();
        builder.Logging.AddDebug();
#endif

        return builder.Build();
    }
}