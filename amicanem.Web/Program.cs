using System.IO.Compression;
using System.Text;
using amicanem.Shared.Service.AppEvent;
using amicanem.Shared.Service.Auth;
using amicanem.Shared.Service.Handler.Auth;
using amicanem.Shared.Service.Platform;
using amicanem.Shared.Service.Sqlite;
using amicanem.Web;
using amicanem.Web.Client.Service.AppEvent;
using amicanem.Web.Client.Service.Auth;
using amicanem.Web.Client.Service.Platform;
using amicanem.Web.Client.Service.Sqlite;
using amicanem.Web.Components;
using amicanem.Web.Data;
using amicanem.Web.Email;
using amicanem.Web.Models.Settings;
using amicanem.Web.Services.JwtToken;
using MessagePack;
using MessagePack.AspNetCoreMvcFormatter;
using MessagePack.Resolvers;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.IdentityModel.Tokens;
using MudBlazor.Services;
using SqliteWasmBlazor;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveWebAssemblyComponents();

builder.Services.AddControllers(options =>
{
    options.InputFormatters.Insert(0, new MessagePackInputFormatter(MessagePackSerializerOptions.Standard.WithResolver(ContractlessStandardResolver.Instance)));
    options.OutputFormatters.Insert(0, new MessagePackOutputFormatter(MessagePackSerializerOptions.Standard.WithResolver(ContractlessStandardResolver.Instance)));
});

builder.Services.AddCascadingAuthenticationState();

builder.Services.AddAuthorizationCore();
builder.Services.AddPooledDbContextFactory<ApplicationDbContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection") ?? throw new InvalidOperationException("Connection string 'DefaultConnection' not found.");
    options.UseNpgsql(connectionString, npgsqlOptions =>
    {
        npgsqlOptions.EnableRetryOnFailure(
            maxRetryCount: 3,
            maxRetryDelay: TimeSpan.FromSeconds(5),
            errorCodesToAdd: null);
    });
    options.ConfigureWarnings(warnings => warnings.Ignore(RelationalEventId.PendingModelChangesWarning));
}, poolSize: 2);
builder.Services.AddScoped<ApplicationDbContext>(p => p.GetRequiredService<IDbContextFactory<ApplicationDbContext>>().CreateDbContext());
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
builder.Services.AddIdentityCore<ApplicationUser>(options =>
    {
        options.User.RequireUniqueEmail = true;
        options.Password.RequireDigit = true;
        options.Password.RequireUppercase = true;
        options.SignIn.RequireConfirmedEmail = true;
        options.Tokens.ProviderMap.Add("CustomEmail", new TokenProviderDescriptor(typeof(EmailTokenProvider<ApplicationUser>)));
        options.Tokens.EmailConfirmationTokenProvider = "CustomEmail";
    })
    .AddRoles<IdentityRole<int>>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddSignInManager()
    .AddDefaultTokenProviders();

var googleSettings = builder.Configuration.GetSection("GoogleSettings").Get<GoogleSettings>() ?? throw new InvalidOperationException("Google settings not found.");
var jwtSettings = builder.Configuration.GetSection("JwtSettings").Get<JwtSettings>() ?? throw new InvalidOperationException("Jwt settings not found.");
builder.Services.AddAuthentication(options =>
    {
        options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
        options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
    })
    .AddCookie(IdentityConstants.ExternalScheme, options =>
    {
        options.Cookie.Name = googleSettings.CookieName;
        options.ExpireTimeSpan = TimeSpan.FromMinutes(5);
        options.SlidingExpiration = false;
    })
    .AddGoogle(options =>
    {
        options.ClientId = googleSettings.Id;
        options.ClientSecret = googleSettings.Secret;
        options.CallbackPath = googleSettings.CallbackPath;
        options.Scope.Add("profile");
        options.Scope.Add("email");
        options.ClaimActions.MapJsonKey("picture", "picture", "url");
        options.SignInScheme = IdentityConstants.ExternalScheme;
    })
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtSettings.Issuer,
            ValidAudience = jwtSettings.Audience,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.Secret)),
            ClockSkew = TimeSpan.Zero
        };
        options.Events = new JwtBearerEvents
        {
            OnMessageReceived = context =>
            {
                var accessToken = context.Request.Query["access_token"];
                var path = context.HttpContext.Request.Path;
                if (!string.IsNullOrEmpty(accessToken) && path.StartsWithSegments("/_amicanem"))
                    context.Token = accessToken;
                
                return Task.CompletedTask;
            }
        };
    });

builder.Services.AddTransient<EmailTokenProvider<ApplicationUser>>();
builder.Services.AddSingleton<ICustomEmailSender<ApplicationUser>, CustomEmailSender>();
builder.Services.Configure<JwtSettings>(builder.Configuration.GetSection("JwtSettings")); 
builder.Services.Configure<WebsocketJwtSettings>(builder.Configuration.GetSection("WebsocketJwtSettings")); 
builder.Services.Configure<EmailSettings>(builder.Configuration.GetSection("EmailSettings"));
builder.Services.Configure<CdnSettings>(builder.Configuration.GetSection("CdnSettings")); 
builder.Services.Configure<WebSocketSettings>(builder.Configuration.GetSection("WebSocketSettings"));  
builder.Services.AddScoped<IJwtTokenService, JwtTokenService>();

builder.Services.AddResponseCompression(options =>
{
    options.EnableForHttps = true;
    options.Providers.Add<BrotliCompressionProvider>();
    options.Providers.Add<GzipCompressionProvider>();
    options.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat([
        "text/plain",
        "application/json",
        "application/x-msgpack",
        "application/octet-stream"
    ]);
});

builder.Services.Configure<BrotliCompressionProviderOptions>(options => { options.Level = CompressionLevel.Optimal; });
builder.Services.Configure<GzipCompressionProviderOptions>(options => { options.Level = CompressionLevel.Optimal; });

// Client
builder.Services.AddMudServices();
builder.Services.AddSqliteWasm();
builder.Services.AddDbContextFactory<WebSqliteDbContext>(options =>
{
    var connection = new SqliteWasmConnection("Data source=amicanem.db3");
    options.UseSqliteWasm(connection);
});
builder.Services.AddSingleton<IPlatformService, WebPlatformService>();
builder.Services.AddSingleton<IAppEventService, WebAppEventService>();
builder.Services.AddSingleton<ISqliteService, WebSqliteService>(); 
builder.Services.AddHttpClient<IAuthService, WebAuthService>().AddHttpMessageHandler<AuthHeaderHandler>().RemoveAllLoggers();
builder.Services.AddHttpClient("RefreshClient").RemoveAllLoggers(); 

// Add CORS
var origins = builder.Configuration.GetSection("OriginSettings").Get<List<string>>() ?? [];
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy
            .WithOrigins(origins.ToArray()) 
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials(); 
    });
});
var app = builder.Build();

await DbSeeder.SeedAsync(app.Services); 

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

app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.UseStatusCodePagesWithReExecute("/not-found", createScopeForStatusCodePages: true);
if (!app.Environment.IsDevelopment())
{
    app.UseHttpsRedirection();
}

app.UseAntiforgery();

app.MapStaticAssets();

app.MapRazorComponents<App>()
    .AddInteractiveWebAssemblyRenderMode()
    .AddAdditionalAssemblies(
        typeof(amicanem.Shared._Imports).Assembly,
        typeof(amicanem.Web.Client._Imports).Assembly);

app.Run();