    export class CarType {
        CarTypeId:number;
        ModelMake:string;
        Model:string;
        ModelName:string;  
        ModelYear:string;
        ModelBody:string;
        ModelWeightKg:number; 
        ModelDoors:number; 
        Gear:string;
        BranchId:number;
        public constructor(
        CarTypeId:number=0,
        ModelMake:string="",
        Model:string="",
        ModelName:string="",  
        ModelYear:string="",
        ModelBody:string="",
        ModelWeightKg:number=0, 
        ModelDoors:number=0, 
        Gear:string="",
        BranchId:number=0) 
     {} 
    }
    export class CarStatus
    {
        CarId:number;
        CarTypeId:CarType;
        ActuallyKm:number;
        Picture:string;  
        ProperToBeRent:boolean;
        AvaibleToBeRent:boolean;
        DayPrice:number;
        DayDelayPrice:number;
        PlateNumber:number;
        BranchId:Branch=new Branch();
        public constructor(
        CarId:number=0,
        CarTypeId:CarType=new CarType(),
        ActuallyKm:number=0,
        Picture:string="",  
        ProperToBeRent:boolean=false,
        AvaibleToBeRent:boolean=false,
        DayPrice:number=0,
        DayDelayPrice:number=0,
        PlateNumber:number=0,
        BranchId:Branch=new Branch()){}
    }
    export class Branch{
        BranchId:number
        Adress:string 
        BranchName:string   
    }
export interface Reservation{
    OrderId:number
    PickUpDate:Date
    ReturnDate:Date
    ActuallReturnDate:Date
    Car:CarStatus
    User:Users 
}
export interface Users{
    UserId:number
    FullName:string
    Identity:number
    UserName:string
    BirthDay:Date
    Gender:string
    Email:string
    Password:string
    Rank:string
    Picture:string
}

