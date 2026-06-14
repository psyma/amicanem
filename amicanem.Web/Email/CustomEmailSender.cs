using amicanem.Web.Data;
using amicanem.Web.Models.Settings;
using Microsoft.Extensions.Options;
using MimeKit;
using MailKit.Net.Smtp;

namespace amicanem.Web.Email;

public class CustomEmailSender : ICustomEmailSender<ApplicationUser>
{
    private readonly EmailSettings _emailSettings;

    public CustomEmailSender(IOptions<EmailSettings> emailSettings)
    {
        _emailSettings = emailSettings.Value;
    }

    public async Task SendDefaultPasswordAsync(ApplicationUser user, string email, string password, string subject)
    {
        const string template = "<div style=\\\"max-width: 600px;\\\">  <p>Hi {user},</p>  <p>Your temporary password is: {password}</p>  <p>For security reasons, please log in and change your password as soon as possible.</p>  <p>If you did not request this code or if you believe you have received this email in error, please disregard it. If you have any concerns or need further assistance, please contact our support team at <span style=\\\"color: #2563EB; text-decoration: none\\\">support@amicanem.com</span>  </p>  <div>    <p style=\\\"margin: 0;\\\">Best regards,</p>    <p style=\\\"margin: 0;\\\">The Amicanem Team</p>  </div></div>";
        var mimeMessage = new MimeMessage();
        mimeMessage.From.Add(MailboxAddress.Parse(_emailSettings.Username));
        mimeMessage.To.Add(MailboxAddress.Parse(email));
        mimeMessage.Subject = subject;
        mimeMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
        {
            Text = template.Replace("{user}", user.DisplayName).Replace("{password}", password)
        };
        
        await SendEmailAsync(mimeMessage); 
    }
    
    private async Task SendEmailAsync(MimeMessage mimeMessage)
    {
        var smtp = new SmtpClient();
        await smtp.ConnectAsync(_emailSettings.Host, _emailSettings.Port, MailKit.Security.SecureSocketOptions.SslOnConnect);
        await smtp.AuthenticateAsync(_emailSettings.Username, _emailSettings.Password);
        await smtp.SendAsync(mimeMessage);
        await smtp.DisconnectAsync(true); 
    }
}