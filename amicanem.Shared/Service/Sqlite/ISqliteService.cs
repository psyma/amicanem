namespace amicanem.Shared.Service.Sqlite;

public interface ISqliteService
{
    public Task<int> Insert<T>(T item) where T : class, new();
    public Task<int> Delete<T>(T item) where T : class, new();
    public Task<int> DeleteById<T>(int id) where T : class, new();
    public Task<int> Update<T>(T item) where T : class, new();
    public Task<T?> Get<T>(int id) where T : class, new();
    public Task<List<T>> GetAll<T>() where T : class, new();
}