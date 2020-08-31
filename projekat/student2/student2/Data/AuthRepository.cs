using student2.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;

namespace student2.Data
{
    public class AuthRepository : IAuthRepository
    {

        private readonly DataContext contexts;

        public AuthRepository(DataContext context)
        {
            contexts = context;
        }

        public bool VerifyPasswordHash(string password, byte[] passwordHashs, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHashs[i])
                        return false;
                }
                return true;
            }
        }
        public void CreatePasswordHash(string password, out byte[] passwordHashs, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHashs = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
        }

        public User Login(string username, string password)
        {
            var user = contexts.Users.Where(x => x.UserName == username).FirstOrDefault();
            if (user == null)
                return null;
            //if (!VerifyPasswordHash(password, user.PasswordHashs, user.PasswordSalt))
            //    return null;

            return user;
        }

        public async Task<User> Register(User user, string password)
        {
            byte[] passwordHashs, passwordSalt;

            CreatePasswordHash(password, out passwordHashs, out passwordSalt);

            user.PasswordHashs = passwordHashs;
            user.PasswordSalt = passwordSalt;

            await contexts.Users.AddAsync(user);

            await contexts.SaveChangesAsync();

            return user;
        }

        public bool UserExists(string username)
        {
            var user = contexts.Users.Where(x => x.UserName == username).FirstOrDefault();
            return user == null;

        }
    }
}
