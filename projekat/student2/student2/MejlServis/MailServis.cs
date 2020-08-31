using Microsoft.EntityFrameworkCore;
using student2.Data;
using student2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace student2.MejlServis
{
    public class MailServis
    {
        private readonly DataContext _context;

        public MailServis(DataContext context)
        {
            _context = context;
        }

        public void Potvrdi(UserHelpReg userhelp)
        {
            _context.Entry(userhelp).State = EntityState.Modified;
            _context.SaveChanges();
        }
    }
}
