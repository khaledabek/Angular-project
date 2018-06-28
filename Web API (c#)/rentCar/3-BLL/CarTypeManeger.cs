using _1_DAL;
using _2_BO;
using System;
using System.Collections.Generic;
using System.Linq;
namespace _3_BLL
{
    public class CarTypeManeger
    {
        public List<CarType> GetAllCars()
        {
            using (CarRentEntities db = new CarRentEntities())
            {
                return db.carsType_tbl.Select(c => new CarType
                {
                    ModelMake = c.ModelMake,
                    Model = c.Model,
                    ModelName = c.ModelName,
                    ModelYear = c.ModelYear,
                    ModelBody = c.ModelBody,
                    ModelWeightKg = c.ModelWeightKg,
                    ModelDoors = c.ModelDoors,
                    Gear = c.Gear
                }
                      ).ToList();
            }
        }
        public CarType GetCar(int id)
        {

            using (CarRentEntities db = new CarRentEntities())
            {
                carsType_tbl c = db.carsType_tbl.FirstOrDefault(car => car.CarTypeId == id);
                if (c != null)
                    return new CarType
                    {
                        ModelMake = c.ModelMake,
                        Model = c.Model,
                        ModelName = c.ModelName,
                        ModelYear = c.ModelYear,
                        ModelBody = c.ModelBody,
                        ModelWeightKg = c.ModelWeightKg,
                        ModelDoors = c.ModelDoors,
                        Gear = c.Gear
                    };
                return null;
            }

        }
        public bool AddCar(CarType c)
        {
            try
            {
                using (CarRentEntities db = new CarRentEntities())
                {
                    db.carsType_tbl.Add(
                     new carsType_tbl
                     {
                         ModelMake = c.ModelMake,
                         Model = c.Model,
                         ModelName = c.ModelName,
                         ModelYear = c.ModelYear,
                         ModelBody = c.ModelBody,
                         ModelWeightKg = c.ModelWeightKg,
                         ModelDoors = c.ModelDoors,
                         Gear = c.Gear
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
        public bool EditCar(CarType changedCar)
        {
            try
            {
                using (CarRentEntities db = new CarRentEntities())
                {
                    carsType_tbl car = db.carsType_tbl.FirstOrDefault(c => c.CarTypeId == changedCar.CarTypeId);
                    if (car != null)
                    {
                        car.ModelMake = changedCar.ModelMake;
                        car.Model = changedCar.Model;
                        car.ModelName = changedCar.ModelName;
                        car.ModelYear = changedCar.ModelYear;
                        car.ModelBody = changedCar.ModelBody;
                        car.ModelWeightKg = changedCar.ModelWeightKg;
                        car.ModelDoors = changedCar.ModelDoors;
                        car.Gear = changedCar.Gear;
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
        public bool RemoveCar(string carModel,string year)
        {
            try
            {
                using (CarRentEntities db = new CarRentEntities())
                {
                    carsType_tbl car = db.carsType_tbl.FirstOrDefault(c => (c.Model == carModel && c.ModelYear==year));
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
