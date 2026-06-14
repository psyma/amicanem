using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace amicanem.Web.Email;

public class CustomEmailTokenProvider<TUser> : DataProtectorTokenProvider<TUser> where TUser : class
{
    public CustomEmailTokenProvider(
        IDataProtectionProvider dataProtectionProvider, 
        IOptions<EmailTokenProviderOptions> options,
        ILogger<DataProtectorTokenProvider<TUser>> logger) : base(dataProtectionProvider, options, logger) { }
}