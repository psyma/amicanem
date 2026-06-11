using amicanem.Shared.Service.AppEvent;
using amicanem.Shared.Service.Platform;
using amicanem.Shared.Service.Sqlite;
using amicanem.Web.Client.Service.AppEvent;
using amicanem.Web.Client.Service.Platform;
using amicanem.Web.Client.Service.Sqlite;
using amicanem.Web.Components;
using MudBlazor.Services;
using SqliteWasmBlazor;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveWebAssemblyComponents();

builder.Services.AddDbContextFactory<WebSqliteDbContext>(options =>
{
    var connection = new SqliteWasmConnection("Data source=amicanem.db3");
    options.UseSqliteWasm(connection);
});

builder.Services.AddMudServices();
builder.Services.AddSqliteWasm();

// Client
builder.Services.AddSingleton<IPlatformService, WebPlatformService>();
builder.Services.AddSingleton<IAppEventService, WebAppEventService>();
builder.Services.AddSingleton<ISqliteService, WebSqliteService>(); 

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseWebAssemblyDebugging();
}
else
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseStatusCodePagesWithReExecute("/not-found", createScopeForStatusCodePages: true);
app.UseHttpsRedirection();

app.UseAntiforgery();

app.MapStaticAssets();

app.MapRazorComponents<App>()
    .AddInteractiveWebAssemblyRenderMode()
    .AddAdditionalAssemblies(
        typeof(amicanem.Shared._Imports).Assembly,
        typeof(amicanem.Web.Client._Imports).Assembly);

app.Run();