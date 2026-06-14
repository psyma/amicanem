using Microsoft.AspNetCore.Identity;

namespace amicanem.Web.Email;

public class EmailTokenProviderOptions : DataProtectionTokenProviderOptions
{
    public EmailTokenProviderOptions()
    {
        Name = "EmailTokenProvider";
        TokenLifespan = TimeSpan.FromHours(1);
    }
}