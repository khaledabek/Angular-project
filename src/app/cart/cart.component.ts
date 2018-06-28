import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { CarService } from './../shared/services/Cars.service';
import { CarType, CarStatus, Users, Reservation } from './../shared/models/Car.model';
import { Router, ActivatedRoute } from '@angular/router';
import {AccountService} from './../shared/services/account.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

user:any;
isLogedIn:any;
  currentFilter: string;
  searching=false;
  reservation: Reservation[];
  constructor(private myCarService:CarService,
    private router:Router,
    private route:ActivatedRoute,
    private accountService:AccountService) {
  this.reservation=new Array<Reservation>();

     }


  ngOnInit() {
    this.user = this.accountService.globalUser;
    this.isLogedIn = this.accountService.isLogedIn;
    this.myCarService.getCartInfo(this.accountService.globalUser.userName).subscribe((x) => {
      this.reservation = x;
      console.log(this.reservation);

    });
  }



 /* searchCars(currentFilter: string) {

    //this.CarFilterRef.nativeElement.value="Zohar";  --> works, but not recommended to use
    this.myCarService.getCartInfo(this.currentFilter).subscribe((x) => {
      this.CarList = x;
      this.searching=false;
    },
    (error)=>{
      console.log(error);
      this.searching=false;
    }
  );
  }
*/
 
}
