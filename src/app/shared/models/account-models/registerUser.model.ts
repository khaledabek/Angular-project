import { ValidatorFn ,AbstractControl} from "@angular/forms";
import { ValidConfig} from "./../validators/validConfig.model";
import {ValidationRules} from "./../validators/constConfig";

export class RegisterUser{
    
        fullName:string;
        id:number;
        userName:string;
        BirthDate:string;
        gender:string;
        Email:string;
        Password:string;
        
        static get userNameValidators(): ValidatorFn[] {
            return [
                //TODO: add english chars validation
                ValidConfig.required("User name is requierd"),
                ValidConfig.minLength(ValidationRules.MIN_CHARS_USER_NAME, `User name can't be shorter than ${ValidationRules.MIN_CHARS_USER_NAME} chars.`),
                ValidConfig.maxLength(ValidationRules.MAX_CHARS_USER_NAME, `User name  can't exceeds  ${ValidationRules.MAX_CHARS_USER_NAME} chars.`)
            ];
        }
    }