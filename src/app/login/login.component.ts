
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {AccountService} from './../shared/services/account.service';
//import { AlertService, AuthenticationService } from './../shared/services/index';

import { ValidateUser, User } from './../shared/models/account-models/index';
import { _throw } from 'rxjs/observable/throw';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  ValidateUser:ValidateUser;
  loading = false;
  hide=true;
  errorMsg:string;
  constructor(private accountService:AccountService,
              private fb: FormBuilder,
              //private authenticationService: AuthenticationService,
              //private alertService: AlertService,
              private router: Router) {
                this.createForm();
              }

  ngOnInit() {}
  
  createForm() {
    this.loginForm = this.fb.group({
      userName: ['khalbek',ValidateUser.userNameValidators],
      userPassword: ['khal123!',ValidateUser.userPasswordValidators]
    });
  }

  changeUser(){
    console.log("this.loginForm",this.loginForm.value);
    this.accountService.login({userName:this.loginForm.value.userName,
                               userPassword:this.loginForm.value.userPassword})
                               .subscribe(
data => {
                this.router.navigate(["/home"]);
            console.log(data)},
error=>{        return _throw('Invalid username or password');
}                               );
  }
}
 /* tchangeUser() {
    this.loading = true;
    this.authenticationService.login(this.loginForm.value.userName,this.loginForm.value.userPassword)
        .subscribe(
            data => {
                this.router.navigate(["/home"]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}
}*/


