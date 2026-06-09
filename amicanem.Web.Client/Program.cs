using amicanem.Shared.Service.Platform;
using amicanem.Web.Client.Service.Platform;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using MudBlazor.Services;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.Services.AddMudServices();

builder.Services.AddSingleton<IPlatformService, WebPlatformService>();

await builder.Build().RunAsync();