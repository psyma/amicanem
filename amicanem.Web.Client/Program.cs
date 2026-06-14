using amicanem.Shared.Service.AppEvent;
using amicanem.Shared.Service.Auth;
using amicanem.Shared.Service.Handler.Auth;
using amicanem.Shared.Service.JwtAuthState;
using amicanem.Shared.Service.Platform;
using amicanem.Shared.Service.Sqlite;
using amicanem.Web.Client.Service.AppEvent;
using amicanem.Web.Client.Service.Auth;
using amicanem.Web.Client.Service.Platform;
using amicanem.Web.Client.Service.Sqlite;
using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using MudBlazor.Services;
using SqliteWasmBlazor;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.Services.AddAuthorizationCore();
builder.Services.AddCascadingAuthenticationState();
builder.Services.AddAuthenticationStateDeserialization();

builder.Services.AddDbContextFactory<WebSqliteDbContext>(options =>
{
    var connection = new SqliteWasmConnection("Data source=amicanem.db3");
    options.UseSqliteWasm(connection);
});

builder.Services.AddMudServices();
builder.Services.AddSqliteWasm();

builder.Services.AddSingleton<IPlatformService, WebPlatformService>();
builder.Services.AddSingleton<IAppEventService, WebAppEventService>();
builder.Services.AddSingleton<ISqliteService, WebSqliteService>();

builder.Services.AddSingleton<JwtAuthStateProvider>();
builder.Services.AddSingleton<IJwtAuthStateProvider>(sp => sp.GetRequiredService<JwtAuthStateProvider>());
builder.Services.AddSingleton<AuthenticationStateProvider>(sp => sp.GetRequiredService<JwtAuthStateProvider>());
builder.Services.AddSingleton<AuthHeaderHandler>();
builder.Services.AddSingleton<RetryOnUnauthorizedHandler>();
builder.Services.AddHttpClient("RefreshClient", o => { o.BaseAddress = new Uri(builder.HostEnvironment.BaseAddress); }).RemoveAllLoggers();

builder.Services.AddHttpClient<IAuthService, WebAuthService>(o => { o.BaseAddress = new Uri(builder.HostEnvironment.BaseAddress); })
    .AddHttpMessageHandler<RetryOnUnauthorizedHandler>()
    .AddHttpMessageHandler<AuthHeaderHandler>().RemoveAllLoggers();

var host = builder.Build();

await host.Services.InitializeSqliteWasmDatabaseAsync<WebSqliteDbContext>();
await host.RunAsync();