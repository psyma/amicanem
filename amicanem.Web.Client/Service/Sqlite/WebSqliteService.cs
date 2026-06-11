using amicanem.Shared.Service.Sqlite;
using Microsoft.EntityFrameworkCore;

namespace amicanem.Web.Client.Service.Sqlite;

public class WebSqliteService : ISqliteService
{
    private readonly IDbContextFactory<WebSqliteDbContext> _factory;

    public WebSqliteService(IDbContextFactory<WebSqliteDbContext> factory)
    {
        _factory = factory;
    }
    
    public async Task<int> Insert<T>(T item) where T : class, new()
    {
        await using var db = await _factory.CreateDbContextAsync();
        
        await db.AddAsync(item);
        return await db.SaveChangesAsync();
    }

    public async Task<int> Delete<T>(T item) where T : class, new()
    {
        await using var db = await _factory.CreateDbContextAsync();
        
        db.Remove(item);
        return await db.SaveChangesAsync();
    }

    public async Task<int> DeleteById<T>(int id) where T : class, new()
    {
        await using var db = await _factory.CreateDbContextAsync(); 

        var item  = await db.FindAsync<T>(id);
        if (item == null) return 0;
        
       return await Delete(item);
    }

    public async Task<int> Update<T>(T item) where T : class, new()
    {
        await using var db = await _factory.CreateDbContextAsync();
        
        db.Update(item);
        return await db.SaveChangesAsync();
    }

    public async Task<T?> Get<T>(int id) where T : class, new()
    {
        await using var db = await _factory.CreateDbContextAsync();

        var item = await db.FindAsync<T>(id);
        return item;
    }

    public async Task<List<T>> GetAll<T>() where T : class, new()
    {
        await using var db = await _factory.CreateDbContextAsync();

        return await db.Set<T>().ToListAsync();
    }
}