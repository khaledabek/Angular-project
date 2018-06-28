import { Component, OnInit } from '@angular/core';
import {CarService} from './../shared/services/Cars.service';
import {CarType, CarStatus} from './../shared/models/Car.model';
import { Router,ActivatedRoute } from '@angular/router';
import {User} from './../shared/models/account-models/index';
import {AccountService} from './../shared/services/account.service';
import { functions } from '../shared/services/functions.service';
import {BsDatepickerConfig} from'ngx-bootstrap/datepicker'

 
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  isLogedIn:any;
Car:CarStatus;
rentDate:any;
datepickerConfig:Partial <BsDatepickerConfig>;
  constructor(private myCarService:CarService,
              private router:Router,
              private route:ActivatedRoute,
              private accountService:AccountService) {
                this.datepickerConfig=Object.assign({},{
                  containerClass:'theme-blue',
                  rangeInputFormat: 'DD/MM/YYYY',
                  rangeSeparator: ' ► ',
                  minDate:this.getDate(0),
                  maxDate:this.getDate(1),
                  showWeekNumbers:false,
                })
               }
print(x){
console.log(x);
}
  ngOnInit() {
this.isLogedIn= this.accountService.isLogedIn;
console.log(this.isLogedIn);
    this.route.params.subscribe(params => {
      this.myCarService.getCarInfo(params.id).subscribe(a=>{ this.Car=a});      
      });
  }
  getDate(yearDate){
    let now=new Date();
   return new Date((now.getFullYear())+yearDate,now.getMonth(),now.getDate());
  }
  getdays(date){
    
  }
 /* getAuthorList():string {
    if (!this.Car.volumeInfo.authors || !this.Car.volumeInfo.authors.length) {
      return 'Author Unknown';
    }
    switch (this.Car.volumeInfo.authors.length) {
      case 1:
        return this.Car.volumeInfo.authors[0];
      case 2:
        return this.Car.volumeInfo.authors.join(' and ');
      default:
        const last = this.Car.volumeInfo.authors[this.Car.volumeInfo.authors.length - 1];
        const remaining = this.Car.volumeInfo.authors.slice(0, -1);
        return `${remaining.join(', ')}, and ${last}`;
    }
  }*/
  goBack(){
    this.router.navigate([`/products`]);
  }

}
