using Microsoft.EntityFrameworkCore;
using student2.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace student2.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<CarModels>  Cars { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<RentaCompany> RentaCompanies { get; set; }
        public DbSet<CarModels> CarsModels { get; set; }
    }
}
