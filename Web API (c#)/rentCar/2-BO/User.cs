using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;



namespace _2_BO
{
    public class User
    {
        public int UserId { get; set; }
        public string FullName { get; set; }
        public int Identity { get; set; }
        public string UserName { get; set; }
        public Nullable<System.DateTime> BirthDay { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string Passwords { get; set; }
        public string Rank { get; set; }
        public string Picture { get; set; }

    }
}
