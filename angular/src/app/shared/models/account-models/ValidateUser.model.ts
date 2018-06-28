import { ValidatorFn ,AbstractControl} from "@angular/forms";
import { ValidConfig} from "./../validators/validConfig.model";
import {ValidationRules} from "./../validators/constConfig";
import { FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
export class ValidateUser{

    constructor(public userName:string,
                public userPassword:string){}


                static get userNameValidators(): ValidatorFn[] {
                    return [
                        //TODO: add english chars validation
                        ValidConfig.required("User name is requierd"),
                        ValidConfig.minLength(ValidationRules.MIN_CHARS_USER_NAME, `User name can't be shorter than ${ValidationRules.MIN_CHARS_USER_NAME} chars.`),
                        ValidConfig.maxLength(ValidationRules.MAX_CHARS_USER_NAME, `User name  can't exceeds  ${ValidationRules.MAX_CHARS_USER_NAME} chars.`)
                    ];
                }


                static get userPasswordValidators(): ValidatorFn[] {
                    return [
                        //TODO: add (english chars / numbesr / * ) validation
                        ValidConfig.required("Password is requierd"),
                        ValidConfig.minLength(ValidationRules.MIN_CHARS_USER_PASSWORD, `Password can't be shorter than ${ValidationRules.MIN_CHARS_USER_PASSWORD} chars.`),
                        ValidConfig.maxLength(ValidationRules.MAX_CHARS_USER_PASSWORD, `Password can't exceeds  ${ValidationRules.MAX_CHARS_USER_PASSWORD} chars.`)
                    ];
                }

           
                static get fullNameValidators(): ValidatorFn[] {
                    return [
                       
                        ValidConfig.required("Full name is requierd"),
                        ValidConfig.minLength(ValidationRules.MIN_CHARS_USER_FULL_NAME, `Full name can't be shorter than ${ValidationRules.MIN_CHARS_USER_FULL_NAME} chars.`),
                        ValidConfig.maxLength(ValidationRules.MAX_CHARS_USER_FULL_NAME, `Full name can't exceeds  ${ValidationRules.MAX_CHARS_USER_FULL_NAME} chars.`)
                    ];
                }
                static get idValidators(): ValidatorFn[] {
                    return [
                       
                        ValidConfig.required("ID is requierd"),
                        ValidConfig.maxLength(ValidationRules.MAX_CHARS_USER_ID, `ID can't exceeds ${ValidationRules.MAX_CHARS_USER_ID} chars.`),
                    ];
                }
                static get emailValidators(): ValidatorFn[] {
                    return [
                        //TODO: add (english chars ) validation
                        ValidConfig.required("Email is requierd"),
                        ValidConfig.minLength(ValidationRules.MIN_CHARS_USER_PASSWORD, `Email can't be shorter than ${ValidationRules.MIN_CHARS_USER_PASSWORD} chars.`),
                        ValidConfig.maxLength(ValidationRules.MAX_CHARS_USER_PASSWORD, `Password can't exceeds  ${ValidationRules.MAX_CHARS_USER_PASSWORD} chars.`)
                    ];
                }
                static  childrenEqual: ValidatorFn = (formGroup: FormGroup) => {
                    const [firstControlName, ...otherControlNames] = Object.keys(formGroup.controls || {});
                    const isValid = otherControlNames.every(controlName => formGroup.get(controlName).value === formGroup.get(firstControlName).value);
                    return isValid ? null : { childrenNotEqual: true };
                }
                 /* regExps: { [key: string]: RegExp } = {
                    password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
                 };*/

}