using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace student2.Models
{
    public class SpeedHelp
    {
        [Key]
        public string IDAuta { get; set; }
        public string Img { get; set; }
        public string Ime { get; set; }
        public string Godiste { get; set; }
        public string Cena { get; set; }
        public string ImeKompanije { get; set; }
        public string MestoPreuzimanja { get; set; }
        public string MestoVracanja { get; set; }
    }
}
