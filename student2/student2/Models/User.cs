using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace student2.Models
{
    public class User : IdentityUser
    {
        public string Type { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string Password { get; set; }
        public byte[] PasswordHashs { get; set; }
        public byte[] PasswordSalt { get; set; }
        public string City { get; set; }

    }
}
