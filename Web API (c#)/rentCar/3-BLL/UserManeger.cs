using _1_DAL;
using _2_BO;
using System;
using System.Collections.Generic;
using System.Linq;
namespace _3_BLL
{
    public class UserManeger
    {
        public List<User> GetAllUsers()
        {
            using (CarRentEntities db = new CarRentEntities())
            {
                return db.users_tbl.Select(u => new User
                {
                    FullName = u.FullName,
                    Identity = u.Identity,
                    UserName = u.UserName,
                    BirthDay = u.BirthDay,
                    Gender = u.Gender,
                    Email = u.Email,
                    Passwords = u.Passwords,
                    Picture = u.Picture,
                    Rank=u.Rank
                }).ToList();
            }
        }
        public User GetUser(string username,string password)
        {

            using (CarRentEntities db = new CarRentEntities())
            {
                users_tbl user = db.users_tbl.FirstOrDefault(c => c.UserName == username && c.Passwords==password);
                if (user != null)
                    return new User
                    {
                        FullName = user.FullName,
                        Identity = user.Identity,
                        UserName = user.UserName,
                        BirthDay = user.BirthDay,
                        Gender = user.Gender,
                        Email = user.Email,
                        Rank=user.Rank,
                        Picture = user.Picture
                    };
                return null;
            }

        }
        public bool AddUser(User user)
        {
            try
            {
                using (CarRentEntities db = new CarRentEntities())
                {
                    db.users_tbl.Add(
                      new users_tbl
                      {
                          FullName = user.FullName,
                          Identity = user.Identity,
                          UserName = user.UserName,
                          BirthDay = user.BirthDay,
                          Gender = user.Gender,
                          Email = user.Email,
                          Rank=user.Rank,
                          Passwords = user.Passwords,
                          Picture = user.Picture
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
        public bool Edituser(User changedUser)
        {
            try
            {
                using (CarRentEntities db = new CarRentEntities())
                {
                    users_tbl user = db.users_tbl.FirstOrDefault(u => u.UserName == changedUser.UserName);
                    if (user != null)
                    {
                        user.FullName = changedUser.FullName;
                        user.Identity = changedUser.Identity;
                        user.UserName = changedUser.UserName;
                        user.BirthDay = changedUser.BirthDay;
                        user.Gender = changedUser.Gender;
                        user.Email = changedUser.Email;
                        user.Passwords = changedUser.Passwords;
                        user.Rank = changedUser.Rank;
                        user.Picture = changedUser.Picture;
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
        public bool RemoveUser(string userName)
        {
            try
            {
                using (CarRentEntities db = new CarRentEntities())
                {
                    users_tbl user = db.users_tbl.FirstOrDefault(c => c.UserName == userName);
                    if (user != null)
                    {
                        db.users_tbl.Remove(user);
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
