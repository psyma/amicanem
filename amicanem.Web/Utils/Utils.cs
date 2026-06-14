using System.Security.Cryptography;
using System.Text;

namespace amicanem.Web.Utils;

public static class Utils
{
    public static string GenerateRandomPassword(int length)
    {
        const string lowercase = "abcdefghijklmnopqrstuvwxyz";
        const string uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const string digits = "0123456789";
        const string special = "!@#$%^&*()-_=+[]{};:',.<>?~";
        const string all = lowercase + uppercase + digits + special; 
        
        var password = new char[length];
        var pos = 0;
        
        password[pos++] = uppercase[RandomNumberGenerator.GetInt32(uppercase.Length)];
        password[pos++] = digits[RandomNumberGenerator.GetInt32(digits.Length)];
        password[pos++] = special[RandomNumberGenerator.GetInt32(special.Length)];

        for (; pos < length; pos++)
        {
            password[pos] = all[RandomNumberGenerator.GetInt32(all.Length)];
        }

        for (var i = password.Length - 1; i > 0; i--)
        {
            var j = RandomNumberGenerator.GetInt32(i + 1);
            (password[i], password[j]) = (password[j], password[i]);
        }

        return new string(password);
    } 
}