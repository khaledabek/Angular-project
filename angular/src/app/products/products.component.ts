import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { CarService } from './../shared/services/Cars.service';
import { CarStatus, CarType, Branch } from './../shared/models/Car.model';
import { Router } from '@angular/router';
import { User } from '../shared/models/account-models';
import { AccountService } from '../shared/services/account.service';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { ValidateCar } from '../shared/models/account-models/ValidateCar.model.1';
import { forEach } from '@angular/router/src/utils/collection';
import { isType } from '@angular/core/src/type';
import { CartComponent } from '../cart/cart.component';
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  userInfo:User;

  @ViewChild("CarFilterInput") CarFilterRef: ElementRef;
  currentFilter: string;
  searching=false;
  CarList: CarStatus[];
 carType:CarType=new CarType();
 carStatus:CarStatus=new CarStatus();
  isQueryDone:boolean=false;
  addForm:FormGroup;
  carTypeForm:FormGroup;
  togel:boolean=false;
  constructor(private myCarService: CarService,
    private router: Router,private accountService:AccountService,private fb: FormBuilder) { 
      this.createForm();
      this.CarList=new Array< CarStatus>();

    } 

  ngOnInit() {
    this.userInfo=this.accountService.globalUser;    
    this.myCarService.getCarsInfo().then((x) => {
      this.CarList = x; 
    });
      this.carType=new CarType();
 this.carStatus=new CarStatus();
   /* this.accountService.userEventEmitter.subscribe((x)=>{
      this.userInfo=x;
      console.log(this.userInfo,x);
      this.userInfo.userUrlAvatar=x.userUrlAvatar;});
*/
  }
  createForm(){
    this.addForm=this.fb.group({
      carTypeId:['',ValidateCar.carTypeId],
      ActuallyKm:['',ValidateCar.kmValidators],
      Picture:['',ValidateCar.pictureValidators],
      DayDelayPrice:['',ValidateCar.dayDelayPriceValidators],
      DayPrice:['',ValidateCar.DayPriceValidators],
      PlateNumber:['',ValidateCar.PlateNumberValidators],
      ProperToBeRent:[''],
      AvaibleToBeRent:[''],
  });

    this.carTypeForm=this.fb.group({
      ModelMake:['',ValidateCar.modelMakerValidators],//have to change valedator
      Model:['',ValidateCar.modelDeatialValidators],
      ModelName:['',ValidateCar.modelNameValidators],
      ModelYear:['',ValidateCar.modelYearValidators],
      ModelWeightKg:['',ValidateCar.modelWeighValidators],
      ModelDoors:['',ValidateCar.modelDoorsValidators],
      Gear:['',ValidateCar.valueRequiredValidators],
      ModelBody:['',ValidateCar.modelBodyValidators],
      
  });
}
  showFullDetail(PlateNumber: string):void {
    this.router.navigate([`/products/${PlateNumber}`]);
  }
  DeleteCar(x:CarStatus):void{
    console.log(x);
    let func:(b:boolean)=>void=(b:boolean)=>{this.isQueryDone=b;}
    this.myCarService.RemoveCar(x,func);
    this.myCarService.getCarsInfo().then((x) => {
      this.CarList = x;
      });
    console.log(this.isQueryDone);
  }
  EditCar(car:CarStatus):void{
    let func:(b:boolean)=>void=(b:boolean)=>{this.isQueryDone=b;} 
    //this.myCarService.EditCar(car,func);
    this.togel=true;
    //create copy..because the form too way pinding
    this.carType=car.CarTypeId;
    this.carStatus=car;
  }
  AddCar(carStatus:CarStatus):void{
    carStatus.CarTypeId=this.carType;
    carStatus.BranchId=new Branch();
    carStatus.BranchId.Adress="lo";
    carStatus.BranchId.BranchName="gr"
    let func:(b:boolean)=>void=(b:boolean)=>{this.isQueryDone=b;} 
this.myCarService.AddCar(carStatus,func);
this.myCarService.getCarsInfo().then((x) => {
  this.CarList = x;
  });
}
AddcarType(carType:CarType):void{
    let func:(b:boolean)=>void=(b:boolean)=>{this.isQueryDone=b;} 
this.myCarService.AddcarType(carType,func);
this.myCarService.getCarsInfo().then((x) => {
  this.CarList = x;
  });
  }
  resetForm(){
    this.createForm();
    this.carType=new CarType();
  }
getyear(year){
  (new Date()).getFullYear()+year;  
}
}