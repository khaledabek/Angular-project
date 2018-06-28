using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2_BO
{
   public class Reservation
    {
        public int OrderId { get; set; }
        public System.DateTime PickUpDate { get; set; }
        public System.DateTime ReturnDate { get; set; }
        public System.DateTime ActuallReturnDate { get; set; }
        public virtual CarStatus CarId { get; set; }
        public virtual User UserId { get; set; }

    }
}
