using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace student2.Models
{
    public class RentaHelp
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Adresa { get; set; }

        public string Promo { get; set; }

        public string Filijale { get; set; }

        public string ocena { get; set; }

        public List<CarModels> ListaAuta { get; set; }
    }
}
