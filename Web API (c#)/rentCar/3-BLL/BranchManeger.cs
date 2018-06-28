using _1_DAL;
using _2_BO;
using System;
using System.Collections.Generic;
using System.Linq;
namespace _3_BLL
{
    public class BranchManeger
    { 
        public List<Branch> GetAllBranch()
        {
            using (CarRentEntities db = new CarRentEntities())
            {
                return db.branchs_tbl.Select(c => new Branch
                {
                    Adress = c.Adress,
                    BranchName = c.BranchName,
               

                }
                      ).ToList();
            }
        }
        public Branch GetBranch(string name)
        {

            using (CarRentEntities db = new CarRentEntities())
            {
                branchs_tbl branch = db.branchs_tbl.FirstOrDefault(c => c.BranchName == name);
                if (branch != null)
                    return new Branch
                    {
                        Adress = branch.Adress,
                        BranchName = branch.BranchName,
                    };
                return null;
            }

        }
        public bool AddBranch(Branch branch)
        {
            try
            {
                using (CarRentEntities db = new CarRentEntities())
                {
                    db.branchs_tbl.Add(
                      new branchs_tbl
                      {
                          Adress = branch.Adress,
                          BranchName = branch.BranchName,
                      }
                );
                    db.SaveChanges();
                    return true;
                }
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool EditBranch(Branch changedBranch)
        {
            try
            {
                using (CarRentEntities db = new CarRentEntities())
                {
                    branchs_tbl branch = db.branchs_tbl.FirstOrDefault(c => c.BranchId == changedBranch.BranchId);
                    if (branch != null)
                    {
                        branch.Adress = changedBranch.Adress;
                        branch.BranchName = changedBranch.BranchName;
                        db.SaveChanges();
                        return true;
                    }
                    return false;
                }
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool Removebranch(string carModel)
        {
            try
            {
                using (CarRentEntities db = new CarRentEntities())
                {
                    carsType_tbl car = db.carsType_tbl.FirstOrDefault(c => c.Model == carModel);
                    if (car != null)
                    {
                        db.carsType_tbl.Remove(car);
                        db.SaveChanges();
                        return true;
                    }
                    return false;
                }
            }
            catch (Exception)
            {
                return false;
            }
        }

    }
}
