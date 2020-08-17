using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace student2.Models
{
    public class SearchDTO
    {
        public bool Location { get; set; }
        public bool Name { get; set; }
        public string DateFrom { get; set; }
        public string DateTo { get; set; }
        public int Price { get; set; }
        public string SearchText { get; set; }
    }
}
