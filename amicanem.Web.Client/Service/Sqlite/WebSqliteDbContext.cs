using amicanem.Shared.Models.Sqlite;
using Microsoft.EntityFrameworkCore;

namespace amicanem.Web.Client.Service.Sqlite;

public class WebSqliteDbContext : DbContext
{
    public WebSqliteDbContext(DbContextOptions<WebSqliteDbContext> options) : base(options) { }
    
    public DbSet<Theme> Themes { get; set; }
    public DbSet<AuthUser> AuthUsers { get; set; }
    
    protected override void OnModelCreating(ModelBuilder builder)
    {
        builder.Entity<Theme>(entity =>
        {
            entity.HasKey(e => e.Id);
        });
        
        builder.Entity<AuthUser>(entity =>
        {
            entity.HasKey(e => e.Id);
        });
    }
}