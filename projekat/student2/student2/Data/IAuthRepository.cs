using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using student2.Models;

namespace student2.Data
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);

        User Login(string username, string password);

        bool UserExists(string username);
    }
}
