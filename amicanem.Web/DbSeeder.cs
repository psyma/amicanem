using amicanem.Shared.Models.User;
using amicanem.Web.Data;
using amicanem.Web.Models.Seed;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace amicanem.Web;

public static class DbSeeder
{
    public static async Task SeedAsync(IServiceProvider services)
    {
        using var scope = services.CreateScope();
        var provider = scope.ServiceProvider;

        var factory = provider.GetRequiredService<IDbContextFactory<ApplicationDbContext>>();
        await using var context = await factory.CreateDbContextAsync();

        if (await context.DataSeedStates.AnyAsync()) return;

        await context.Database.MigrateAsync();
        
        await context.Database.OpenConnectionAsync();
        try
        {
            var roles = new List<IdentityRole<int>>
            {
                new()
                {
                    Id = (int)Roles.Administrator,
                    Name = nameof(Roles.Administrator),
                    NormalizedName = nameof(Roles.Administrator).ToUpper(),
                    ConcurrencyStamp = null
                },
                new()
                {
                    Id = (int)Roles.User,
                    Name = nameof(Roles.User),
                    NormalizedName = nameof(Roles.User).ToUpper(),
                    ConcurrencyStamp = null
                }
            };

            await context.DataSeedStates.AddAsync(new DataSeedState { CreatedAt = DateTime.UtcNow });
            await context.Roles.AddRangeAsync(roles);
            await context.SaveChangesAsync();
        }
        finally
        {
            await context.Database.CloseConnectionAsync();
        }
    }
}