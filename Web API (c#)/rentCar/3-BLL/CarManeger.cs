using _1_DAL;
using _2_BO;
using System;
using System.Collections.Generic;
using System.Linq;
namespace _3_BLL
{
    public class CarManeger
    {
        public List<CarStatus> GetAllCars()
        {
            using (CarRentEntities db = new CarRentEntities())
            {
                return db.cars_tbl.Select(c => new CarStatus
                {
                    CarTypeId = new CarType
                    {
                        CarTypeId = c.carsType_tbl.CarTypeId,
                        ModelMake = c.carsType_tbl.ModelMake,
                        Model = c.carsType_tbl.Model,
                        ModelName = c.carsType_tbl.ModelName,
                        ModelYear = c.carsType_tbl.ModelYear,
                        ModelBody = c.carsType_tbl.ModelBody,
                        ModelWeightKg = c.carsType_tbl.ModelWeightKg,
                        ModelDoors = c.carsType_tbl.ModelDoors,
                        Gear = c.carsType_tbl.Gear
                    },
                    ActuallyKm = c.ActuallyKm,
                    Picture = c.Picture,
                    AvaibleToBeRent = c.AvaibleToBeRent,
                    ProperToBeRent = c.ProperToBeRent,
                    DayPrice = c.DayPrice,
                    DayDelayPrice = c.DayDelayPrice,
                    PlateNumber = c.PlateNumber,

                    BranchId = new Branch
                    {

                        Adress = c.branchs_tbl.Adress,
                        BranchName = c.branchs_tbl.BranchName
                    },
                }
                      ).ToList();
            }
        }
        public CarStatus GetCar(int PlateNumber)
        {

            using (CarRentEntities db = new CarRentEntities())
            {
                cars_tbl c = db.cars_tbl.FirstOrDefault(car => car.PlateNumber == PlateNumber);
                if (c != null)
                    return new CarStatus
                    {
                        CarTypeId = new CarType
                        {
                            CarTypeId = c.carsType_tbl.CarTypeId,
                            ModelMake = c.carsType_tbl.ModelMake,
                            Model = c.carsType_tbl.Model,
                            ModelName = c.carsType_tbl.ModelName,
                            ModelYear = c.carsType_tbl.ModelYear,
                            ModelBody = c.carsType_tbl.ModelBody,
                            ModelWeightKg = c.carsType_tbl.ModelWeightKg,
                            ModelDoors = c.carsType_tbl.ModelDoors,
                            Gear = c.carsType_tbl.Gear
                        },
                        ActuallyKm = c.ActuallyKm,
                        Picture = c.Picture,
                        AvaibleToBeRent = c.AvaibleToBeRent,
                        ProperToBeRent = c.ProperToBeRent,
                        DayPrice = c.DayPrice,
                        DayDelayPrice = c.DayDelayPrice,
                        PlateNumber = c.PlateNumber,

                        BranchId = new Branch
                        {

                            Adress = c.branchs_tbl.Adress,
                            BranchName = c.branchs_tbl.BranchName
                        },
                    };
                return null;
            }

        }
        public bool AddCar(CarStatus c)
        {
            try
            {
                using (CarRentEntities db = new CarRentEntities())
                {
                    db.cars_tbl.Add(
                     new cars_tbl
                     {
                         carsType_tbl = new carsType_tbl
                         {
                             ModelMake = c.CarTypeId.ModelMake,
                             Model = c.CarTypeId.Model,
                             ModelName = c.CarTypeId.ModelName,
                             ModelYear = c.CarTypeId.ModelYear,
                             ModelBody = c.CarTypeId.ModelBody,
                             ModelWeightKg = c.CarTypeId.ModelWeightKg,
                             ModelDoors = c.CarTypeId.ModelDoors,
                             Gear = c.CarTypeId.Gear
                         },
                         ActuallyKm = c.ActuallyKm,
                         Picture = c.Picture,
                         AvaibleToBeRent = c.AvaibleToBeRent,
                         ProperToBeRent = c.ProperToBeRent,
                         DayPrice = c.DayPrice,
                         DayDelayPrice = c.DayDelayPrice,
                         PlateNumber = c.PlateNumber,

                         branchs_tbl = new branchs_tbl
                         {

                             Adress = c.BranchId.Adress,
                             BranchName = c.BranchId.BranchName
                         },
                     });
                    db.SaveChanges();
                    return true;
                }
            }
            catch (Exception)
            {
                return false;
            }
        }
        public bool EditCar(CarStatus changedCar)
        {
            try
            {
                using (CarRentEntities db = new CarRentEntities())
                {
                    cars_tbl car = db.cars_tbl.FirstOrDefault(c => c.PlateNumber == changedCar.PlateNumber);
                    if (car != null)
                    {
                        car.ActuallyKm = changedCar.ActuallyKm;
                        car.AvaibleToBeRent = changedCar.AvaibleToBeRent;
                        car.ProperToBeRent = changedCar.ProperToBeRent;
                        car.Picture = changedCar.Picture;
                        car.DayPrice = changedCar.DayPrice;
                        car.DayDelayPrice = changedCar.DayDelayPrice;
                        car.PlateNumber = changedCar.PlateNumber;
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
        public bool RemoveCar(int plateNumber)
        {
            try
            {
                using (CarRentEntities db = new CarRentEntities())
                {
                    cars_tbl car = db.cars_tbl.FirstOrDefault(c => c.PlateNumber == plateNumber);
                    if (car != null)
                    {
                        db.cars_tbl.Remove(car);
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
