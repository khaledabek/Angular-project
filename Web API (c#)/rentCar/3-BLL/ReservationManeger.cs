using _1_DAL;
using _2_BO;
using System;
using System.Collections.Generic;
using System.Linq;
namespace _3_BLL
{
    public class ReservationManeger
    {
        public List<Reservation> GetAllReservations()
        {
            using (CarRentEntities db = new CarRentEntities())
            {
                return db.orders_tbl.Select(res => new Reservation
                {
                  /*  PickUpDate = res.PickUpDate,
                    ReturnDate = res.ReturnDate,
                    ActuallReturnDate = res.ActuallReturnDate,*/
                    CarId = new CarStatus
                    {
                        CarTypeId = new CarType
                        {
                            CarTypeId = res.cars_tbl.carsType_tbl.CarTypeId,
                            ModelMake = res.cars_tbl.carsType_tbl.ModelMake,
                            Model = res.cars_tbl.carsType_tbl.Model,
                            ModelName = res.cars_tbl.carsType_tbl.ModelName,
                            ModelYear = res.cars_tbl.carsType_tbl.ModelYear,
                            ModelBody = res.cars_tbl.carsType_tbl.ModelBody,
                            ModelWeightKg = res.cars_tbl.carsType_tbl.ModelWeightKg,
                            ModelDoors = res.cars_tbl.carsType_tbl.ModelDoors,
                            Gear = res.cars_tbl.carsType_tbl.Gear
                        },
                        ActuallyKm = res.cars_tbl.ActuallyKm,
                        Picture = res.cars_tbl.Picture,
                        AvaibleToBeRent = res.cars_tbl.AvaibleToBeRent,
                        ProperToBeRent = res.cars_tbl.ProperToBeRent,
                        DayPrice = res.cars_tbl.DayPrice,
                        DayDelayPrice = res.cars_tbl.DayDelayPrice,
                        PlateNumber = res.cars_tbl.PlateNumber,

                        BranchId = new Branch
                        {

                            Adress = res.cars_tbl.branchs_tbl.Adress,
                            BranchName = res.cars_tbl.branchs_tbl.BranchName
                        },
                    },
                    UserId = new User
                    {
                        FullName = res.users_tbl.FullName,
                        Identity = res.users_tbl.Identity,
                        UserName = res.users_tbl.UserName,
                        BirthDay = res.users_tbl.BirthDay,
                        Gender = res.users_tbl.Gender,
                        Email = res.users_tbl.Email,
                        Passwords = res.users_tbl.Passwords,
                        Rank=res.users_tbl.Rank,
                        Picture = res.users_tbl.Picture
                    }
                }).ToList();

            }
        }

        public List<Reservation> GetReservation(string userName)
        {
            using (CarRentEntities db = new CarRentEntities())
            {
                return db.orders_tbl.Select(res => new Reservation
                {
                    PickUpDate = res.PickUpDate,
                    ReturnDate = res.ReturnDate,
                    ActuallReturnDate = res.ActuallReturnDate,
                    CarId = new CarStatus
                    {
                        CarTypeId = new CarType
                        {
                            ModelMake = res.cars_tbl.carsType_tbl.ModelMake,
                            Model = res.cars_tbl.carsType_tbl.Model,
                            ModelName = res.cars_tbl.carsType_tbl.ModelName,
                            ModelYear = res.cars_tbl.carsType_tbl.ModelYear,
                            ModelBody = res.cars_tbl.carsType_tbl.ModelBody,
                            ModelWeightKg = res.cars_tbl.carsType_tbl.ModelWeightKg,
                            ModelDoors = res.cars_tbl.carsType_tbl.ModelDoors,
                            Gear = res.cars_tbl.carsType_tbl.Gear
                        },
                        ActuallyKm = res.cars_tbl.ActuallyKm,
                        Picture = res.cars_tbl.Picture,
                        AvaibleToBeRent = res.cars_tbl.AvaibleToBeRent,
                        ProperToBeRent = res.cars_tbl.ProperToBeRent,
                        DayPrice = res.cars_tbl.DayPrice,
                        DayDelayPrice = res.cars_tbl.DayDelayPrice,
                        PlateNumber = res.cars_tbl.PlateNumber,

                        BranchId = new Branch
                        {

                            Adress = res.cars_tbl.branchs_tbl.Adress,
                            BranchName = res.cars_tbl.branchs_tbl.BranchName
                        }
                    },
                    UserId = new User
                    {
                        FullName = res.users_tbl.FullName,
                        Identity = res.users_tbl.Identity,
                        UserName = res.users_tbl.UserName,
                        BirthDay = res.users_tbl.BirthDay,
                        Gender = res.users_tbl.Gender,
                        Email = res.users_tbl.Email,
                        Passwords = res.users_tbl.Passwords,
                        Rank = res.users_tbl.Rank,
                        Picture = res.users_tbl.Picture
                    }
                }).Where(resrvation=>resrvation.UserId.UserName==userName).ToList();

            }
        }
        public Reservation AddReservation(Reservation res)
        {
            using (CarRentEntities db = new CarRentEntities())
            {
                db.orders_tbl.Add(
                 new orders_tbl
                    {
                        PickUpDate = res.PickUpDate,
                        ReturnDate = res.ReturnDate,
                        ActuallReturnDate = res.ActuallReturnDate,
                        cars_tbl = new cars_tbl
                        {
                            carsType_tbl = new carsType_tbl
                            {
                                ModelMake = res.CarId.CarTypeId.ModelMake,
                                Model = res.CarId.CarTypeId.Model,
                                ModelName = res.CarId.CarTypeId.ModelName,
                                ModelYear = res.CarId.CarTypeId.ModelYear,
                                ModelBody = res.CarId.CarTypeId.ModelBody,
                                ModelWeightKg = res.CarId.CarTypeId.ModelWeightKg,
                                ModelDoors = res.CarId.CarTypeId.ModelDoors,
                                Gear = res.CarId.CarTypeId.Gear
                            },
                            ActuallyKm = res.CarId.ActuallyKm,
                            Picture = res.CarId.Picture,
                            AvaibleToBeRent = res.CarId.AvaibleToBeRent,
                            ProperToBeRent = res.CarId.ProperToBeRent,
                            DayPrice = res.CarId.DayPrice,
                            DayDelayPrice = res.CarId.DayDelayPrice,
                            PlateNumber = res.CarId.PlateNumber,

                            branchs_tbl = new branchs_tbl
                            {

                                Adress = res.CarId.BranchId.Adress,
                                BranchName = res.CarId.BranchId.BranchName
                            }
                        },
                     users_tbl = new users_tbl
                        {
                            FullName = res.UserId.FullName,
                            Identity = res.UserId.Identity,
                            UserName = res.UserId.UserName,
                            BirthDay = res.UserId.BirthDay,
                            Gender = res.UserId.Gender,
                            Email = res.UserId.Email,
                            Passwords = res.UserId.Passwords,
                            Rank=res.UserId.Rank,
                            Picture = res.UserId.Picture
                        }
                    });
                return null;
            }
        }
        public bool EditReservation(Reservation changedRes)
        {
            try
            {
                using (CarRentEntities db = new CarRentEntities())
                {
                    orders_tbl res = db.orders_tbl.FirstOrDefault(r => r.OrderId == changedRes.OrderId);
                    if (res != null)
                    {
                        changedRes.ReturnDate = res.ReturnDate;
                        changedRes.ActuallReturnDate = res.ActuallReturnDate;
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
        public bool RemoveReservation(int orderId)
        {
            try
            {
                using (CarRentEntities db = new CarRentEntities())
                {
                    orders_tbl res = db.orders_tbl.FirstOrDefault(r => r.OrderId == orderId);
                    if (res != null && res.PickUpDate<(new DateTime().ToLocalTime()))
                    {
                        db.orders_tbl.Remove(res);
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