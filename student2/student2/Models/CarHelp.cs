using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace student2.Models
{
    public class CarHelp
    {
        public string Img { get; set; }
        public string Ime { get; set; }
        public string Godiste { get; set; }
        public string Ocena { get; set; }
        public string Cena { get; set; }
        public string IdAuta { get; set; }
        public string Lokacija { get; set; }
        public string DatumOd { get; set; }
        public string DatumDo { get; set; }
        public string ImeKompanije { get; set; }
        public bool Rezervisan { get; set; }
    }
}
