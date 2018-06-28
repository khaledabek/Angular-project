import { Component, OnInit } from '@angular/core';
import { CountryService } from './../shared/services/country.service';
import { RegisterUser } from './../shared/models/account-models/index';
import { CountryBasic } from './../shared/models/countryBasic.model';
import { tryParse } from 'selenium-webdriver/http';
import { FormArray, FormBuilder, FormGroup,Validators } from '@angular/forms';
import {AccountService} from './../shared/services/account.service';
import { ValidateUser, User } from './../shared/models/account-models/index';
import {functions} from './../shared/services/functions.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLinear = true;
  id:string;
  checkedid:boolean=false;
  newUser=new RegisterUser();
  countryList:CountryBasic[];
  countryNamesList:string[];
  selectedCountry:CountryBasic;
  selectCountryMode=false;

  registerForm: FormGroup;
  ValidateUser:ValidateUser;
  hide=true;
  errorMsg:string;
  constructor(private countryService:CountryService,private accountService:AccountService,
    private fb: FormBuilder) {   
      this.createForm();
    }



createForm() {
this.registerForm = this.fb.group({
fullName:['',ValidateUser.fullNameValidators],
id:['',ValidateUser.idValidators],
userName: ['khaledbek',ValidateUser.userNameValidators],
birthDate:['',Validators.required],
emailGroup: this.fb.group({
  email: ['', [
    Validators.required,
    Validators.email
  ]],
  confirmEmail: ['', Validators.required]
}, { validator: ValidateUser.childrenEqual}),
passwordGroup: this.fb.group({          //todo--ValidateUser.userPasswordValidators
  password: ['', [
    Validators.required,
    Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,10}$/)
  ]],
  confirmPassword: ['', Validators.required]
}, { validator: ValidateUser.childrenEqual}),
});
}


 checkId(id:string){
functions.checkId(id);
}

   getTheDate(yearDate:number){//ensert how many years to add to today date.
    return functions.getTheDate(yearDate);
    }
 
  setCountryMode():void{
    this.selectCountryMode=!this.selectCountryMode;
  }

  ngOnInit() {
    this.countryService.getCountries((res:string[])=>{this.countryNamesList=res});
    
    this.countryService.getCountriesInfo().subscribe(
      (res:CountryBasic[])=>{
        this.countryList=res;
        this.selectedCountry=res.length?res[0]:undefined;
      }
    );
  }


}
