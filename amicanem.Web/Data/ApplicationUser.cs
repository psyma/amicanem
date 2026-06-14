using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace amicanem.Web.Data;

public class ApplicationUser : IdentityUser<int>
{
    [MaxLength(120)]
    public string? RefreshToken { get; set; }
    public DateTime? RefreshTokenExpiryTime { get; set; }
    
    [MaxLength(30)]
    public string? DisplayName { get; set; }
    
    [MaxLength(15)]
    public string? Nickname { get; set; }
    
    [MaxLength(2048)]
    public string? PictureUrl { get; set; }
}