using amicanem.Service.AppEvent;
using amicanem.Service.Auth;
using amicanem.Service.Platform;
using amicanem.Service.Sqlite;
using amicanem.Shared.Service.AppEvent;
using amicanem.Shared.Service.Auth;
using amicanem.Shared.Service.Handler.Auth;
using amicanem.Shared.Service.JwtAuthState;
using amicanem.Shared.Service.Platform;
using amicanem.Shared.Service.Sqlite;
using Microsoft.AspNetCore.Components.Authorization;
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

        builder.Services.AddCascadingAuthenticationState();
        builder.Services.AddAuthorizationCore();
        
        builder.Services.AddMauiBlazorWebView();
        builder.Services.AddMudServices();

        builder.Services.AddSingleton<IPlatformService, MauiPlatformService>();
        builder.Services.AddSingleton<IAppEventService, MauiAppEventService>();
        builder.Services.AddSingleton<ISqliteService, MauiSqliteService>();
        
        builder.Services.AddSingleton<JwtAuthStateProvider>();
        builder.Services.AddSingleton<IJwtAuthStateProvider>(sp => sp.GetRequiredService<JwtAuthStateProvider>());
        builder.Services.AddSingleton<AuthenticationStateProvider>(sp => sp.GetRequiredService<JwtAuthStateProvider>());
        builder.Services.AddSingleton<AuthHeaderHandler>();
        builder.Services.AddSingleton<RetryOnUnauthorizedHandler>();
        builder.Services.AddHttpClient("RefreshClient", o => { o.BaseAddress = new Uri("http://192.168.1.3:5153"); }).RemoveAllLoggers();

        builder.Services.AddHttpClient<IAuthService, MauiAuthService>(o => { o.BaseAddress = new Uri("http://192.168.1.3:5153"); })
            .AddHttpMessageHandler<RetryOnUnauthorizedHandler>()
            .AddHttpMessageHandler<AuthHeaderHandler>().RemoveAllLoggers();

#if DEBUG
        builder.Services.AddBlazorWebViewDeveloperTools();
        builder.Logging.AddDebug();
#endif

        return builder.Build();
    }
}