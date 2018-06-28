using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2_BO
{
   public class CarStatus
    {
        public int CarId { get; set; }
        public virtual CarType CarTypeId { get; set; }
        public int ActuallyKm { get; set; }
        public string Picture { get; set; }  // [varchar](150) NULL,
        public Nullable<bool> ProperToBeRent { get; set; }
        public Nullable<bool> AvaibleToBeRent { get; set; }
        public int DayPrice { get; set; }
        public int DayDelayPrice { get; set; }
        public Nullable<int> PlateNumber { get; set; }
        public virtual Branch BranchId { get; set; }
    }
}
