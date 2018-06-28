using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _2_BO
{
    public class Branch
    {
        public int BranchId { get; set; }
        public string Adress { get; set; }// (30) NOT NULL,
        public string BranchName { get; set; }//(25) NOT NULL,       
    }
}
