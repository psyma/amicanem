using amicanem.Shared.Service.AppEvent;
using amicanem.Shared.Service.Platform;
using amicanem.Shared.Service.Sqlite;
using amicanem.Web.Client.Service.AppEvent;
using amicanem.Web.Client.Service.Platform;
using amicanem.Web.Client.Service.Sqlite;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using MudBlazor.Services;
using SqliteWasmBlazor;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

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

var host = builder.Build();

await host.Services.InitializeSqliteWasmDatabaseAsync<WebSqliteDbContext>();
await host.RunAsync();