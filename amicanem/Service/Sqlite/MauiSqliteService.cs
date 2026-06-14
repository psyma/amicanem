using SQLite;
using amicanem.Shared.Models.Sqlite;
using amicanem.Shared.Service.Sqlite;

namespace amicanem.Service.Sqlite;

public class MauiSqliteService : ISqliteService
{
    private SQLiteAsyncConnection? _database;
    private const string DatabaseFilename = "amicanem.db3";
    private static string DatabasePath => Path.Combine(FileSystem.AppDataDirectory, DatabaseFilename);

    private async Task<SQLiteAsyncConnection> GetDatabase()
    {
        if (_database is not null) return _database;

        _database = new SQLiteAsyncConnection(DatabasePath);
        await _database.CreateTableAsync<Theme>();
        await _database.CreateTableAsync<AuthUser>();
        
        return _database;
    }

    public async Task<int> Insert<T>(T item) where T : class, new()
    {
        var db = await GetDatabase();
        return await db.InsertAsync(item);
    }

    public async Task<int> Delete<T>(T item) where T : class, new()
    {
        var db = await GetDatabase();
        return await db.DeleteAsync(item);
    }

    public async Task<int> DeleteById<T>(int id) where T : class, new()
    {
        var db = await GetDatabase();

        var item = await Get<T>(id);
        if (item is null) return 0;

        return await db.DeleteAsync(item);
    }

    public async Task<int> Update<T>(T item) where T : class, new()
    {
        var db = await GetDatabase();
        return await db.UpdateAsync(item);
    }

    public async Task<T?> Get<T>(int id) where T : class, new()
    {
        var db = await GetDatabase();

        try
        {
            return await db.GetAsync<T>(id);
        }
        catch (InvalidOperationException)
        {
            return null;
        }
    }

    public async Task<List<T>> GetAll<T>() where T : class, new()
    {
        var db = await GetDatabase();
        return await db.Table<T>().ToListAsync();
    }
}