using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2_BO
{
    public class CarType
    { //To Do- בדיקות[]
        public int CarTypeId { get; set; }
        public string ModelMake { get; set; }  //[varchar](30) NOT NULL,
        public string Model { get; set; }// [varchar](30) NOT NULL,
        public string ModelName { get; set; }     //[varchar](30) NOT NULL,
        public string ModelYear { get; set; }// [varchar](30) NOT NULL,
        public string ModelBody { get; set; }//[varchar](30) NOT NULL,
        public int? ModelWeightKg { get; set; }
        public int? ModelDoors { get; set; }
        public string Gear { get; set; }
        public int BranchId { get; set; }    // [varchar](30) NULL,
    }
}
