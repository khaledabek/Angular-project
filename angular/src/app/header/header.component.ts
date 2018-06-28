import { Component,OnInit } from '@angular/core';
import {User} from './../shared/models/account-models/index';
import {AccountService} from './../shared/services/account.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  constructor(private accountService:AccountService){}


  userInfo:User;

  ngOnInit(){

    this.userInfo=this.accountService.globalUser;
    this.userInfo.userName="Guest";
    this.userInfo.userUrlAvatar="./../assets/images/profile.png";

    this.accountService.userEventEmitter.subscribe((x)=>{
          this.userInfo.userName=x.userName;
          this.userInfo.userUrlAvatar=x.userUrlAvatar;
    })
  }
}
