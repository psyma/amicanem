using SQLite;

namespace amicanem.Shared.Models.Sqlite;

public class Theme
{
    [PrimaryKey, AutoIncrement]
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public bool IsDarkMode { get; set; }
}