import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ValidateUser, User } from './../models/account-models/index';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { Users } from '../models/Car.model';

@Injectable()
export class AccountService {
  userEventEmitter: EventEmitter<User> = new EventEmitter<User>();
  globalUser: User = new User();
  isLogedIn = { state: false };
  constructor(private httpClient: HttpClient) { 
  this.userEventEmitter.subscribe((x) => {
      this.isLogedIn.state = x.fullName != 'Guest';
    })
  }
  login({ userName, userPassword }: ValidateUser): Observable<boolean> {
    console.log(userName, userPassword);
    this.httpClient.get<Users>(`http://localhost:28468/api/user/${userName}/${userPassword}`)
    .subscribe(a=>{
      this.globalUser.FullName=a.FullName;
      this.globalUser.BirthDay=a.BirthDay;
      this.globalUser.Email=a.Email;
      this.globalUser.Gender=a.Gender;
      this.globalUser.Identity=a.Identity;
      if(a.Picture)this.globalUser.Picture=a.Picture;
      this.globalUser.Rank=a.Rank;
      this.globalUser.userName=a.UserName;
      console.log(a.UserName);
      if (!this.globalUser.userName) {
        // failed login - display the error
        return _throw('Invalid username or password');
      }
    });
console.log("this.glob",this.globalUser.userName);
   
    this.userEventEmitter.emit(this.globalUser);
    return of(true);
  }

  logout(): Observable<boolean>{
    try {
      this.isLogedIn.state=false;
      this.globalUser.userName = "Guest";
      this.globalUser.userUrlAvatar = "./../assets/images/profile.png";
      this.userEventEmitter.emit(this.globalUser);
      return of(true);
    }
    catch{
      return of(false);
    }
  }
}