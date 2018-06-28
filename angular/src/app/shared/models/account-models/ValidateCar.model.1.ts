import { ValidatorFn ,AbstractControl} from "@angular/forms";
import { ValidConfig} from "./../validators/validConfig.model";
import {ValidationRules} from "./../validators/constConfig";
import { FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { validateConfig } from "@angular/router/src/config";
export class ValidateCar{

    constructor(){}

                static get kmValidators(): ValidatorFn[] {
                    return [
                        //TODO: add english chars validation
                        ValidConfig.required("Car Km counter is requierd"),
                        ValidConfig.minLength(ValidationRules.MAX_CHARS_CAR_KM, `Car Km counter can't exceeds ${ValidationRules.MAX_CHARS_CAR_KM} chars.`),
                    ];
                }
                static get pictureValidators(): ValidatorFn[] {
                    return [
                        //TODO: add (english chars / numbesr / * ) validation
                        ValidConfig.minLength(ValidationRules.MIN_CHARS_CAR_PICTURE, `Password can't be shorter than ${ValidationRules.MIN_CHARS_CAR_PICTURE} chars.`),
                        ValidConfig.maxLength(ValidationRules.MAX_CHARS_CAR_PICTURE, `Password can't exceeds  ${ValidationRules.MAX_CHARS_CAR_PICTURE} chars.`)
                    ];
                }
                static get dayDelayPriceValidators(): ValidatorFn[] {
                    return [
                       
                        ValidConfig.required("dayDelayPrice is requierd"),
                        //you have too  valedate to be biger than dayprice
                    ];
                }
                static get DayPriceValidators(): ValidatorFn[] {
                    return [
                       
                        ValidConfig.required("Day Price requierd"),
                        ValidConfig.minLength(ValidationRules.MIN_CHARS_CAR_DAY_PRICE, `CAR DAY PRICE can't be shorter than ${ValidationRules.MAX_CHARS_USER_ID} chars.`),
                    ];
                }
                static get PlateNumberValidators(): ValidatorFn[] {
                    return [
                       
                        ValidConfig.required("Plate Number requierd"),
                        ValidConfig.minLength(ValidationRules.MIN_CHARS_CAR_PLATE_NUMBER, `CAR PLATE NUMBER can't be shorter than ${ValidationRules.MAX_CHARS_USER_ID} chars.`),
                        ValidConfig.maxLength(ValidationRules.MAX_CHARS_CAR_PLATE_NUMBER, `CAR PLATE NUMBER can't exceeds  ${ValidationRules.MAX_CHARS_USER_PASSWORD} chars.`)

                    ];
                }
                static get valueRequiredValidators(): ValidatorFn[] {
                    return [
                        ValidConfig.required("This value is requierd"),
                    ];
                }
                static get carTypeId(): ValidatorFn[] {
                    return [
                        ValidConfig.required("This value is requierd"),
                    ];
                }
                static get modelDeatialValidators(): ValidatorFn[] {
                    return [
                       
                        ValidConfig.required("The Model-Maker requierd"),
                        ValidConfig.minLength(ValidationRules.MIN_CHARS_CAR_MODEL, `CAR MODEL MAKER can't be shorter than ${ValidationRules.MIN_CHARS_CAR_MODEL} chars.`),
                        ValidConfig.maxLength(ValidationRules.MAX_CHARS_CAR_MODEL, `CAR MODEL MAKER can't exceeds  ${ValidationRules.MAX_CHARS_CAR_MODEL} chars.`)
                    ];
                }
                static get modelMakerValidators(): ValidatorFn[] {
                    return [
                       
                        ValidConfig.required("The Model-Maker requierd"),
                        ValidConfig.minLength(ValidationRules.MIN_CHARS_CAR_MODEL_MAKER, `CAR MODEL MAKER can't be shorter than ${ValidationRules.MIN_CHARS_CAR_MODEL_MAKER} chars.`),
                        ValidConfig.maxLength(ValidationRules.MAX_CHARS_CAR_MODEL_MAKER, `CAR MODEL MAKER can't exceeds  ${ValidationRules.MAX_CHARS_CAR_MODEL_MAKER} chars.`)
                    ];
                }
                static get modelNameValidators(): ValidatorFn[] {
                    return [
                        ValidConfig.required("The model name requierd"),
                        ValidConfig.minLength(ValidationRules.MIN_CHARS_CAR_MODEL_NAME, `CAR MODEL NAME can't be shorter than ${ValidationRules.MIN_CHARS_CAR_MODEL_NAME} chars.`),
                        ValidConfig.maxLength(ValidationRules.MAX_CHARS_CAR_MODEL_NAME, `CAR MODEL NAME can't exceeds  ${ValidationRules.MAX_CHARS_CAR_MODEL_NAME} chars.`)
                    ];
                }
                static get modelYearValidators(): ValidatorFn[] {
                    return [
                        ValidConfig.required("The model year requierd"),
                        ValidConfig.minLength(ValidationRules.MIN_CHARS_CAR_MODEL_YEAR, `CAR MODEL YEAR can't be shorter than ${ValidationRules.MIN_CHARS_CAR_MODEL_NAME} chars.`),
                        ValidConfig.maxLength(ValidationRules.MAX_CHARS_CAR_MODEL_NAME, `CAR MODEL YEAR can't exceeds  ${ValidationRules.MAX_CHARS_CAR_MODEL_NAME} chars.`)
                    ];
                }
                static get modelWeighValidators(): ValidatorFn[] {
                    return [
                        ValidConfig.required("The model Weigh requierd"),
                        ValidConfig.minLength(ValidationRules.MIN_CHARS_CAR_MODEL_WEIGHT, `CAR MODEL Weigh can't be shorter than ${ValidationRules.MIN_CHARS_CAR_MODEL_WEIGHT} chars.`),
                        ValidConfig.maxLength(ValidationRules.MIN_CHARS_CAR_MODEL_WEIGHT, `CAR MODEL Weigh can't exceeds  ${ValidationRules.MAX_CHARS_CAR_MODEL_WEIGHT} chars.`)
                    ];
                }
                static get modelDoorsValidators(): ValidatorFn[] {
                    return [
                        ValidConfig.required("The model doors requierd"),
                        ValidConfig.maxLength(ValidationRules.MAX_CHARS_CAR_MODEL_DOOR, `CAR MODEL Doors can't exceeds  ${ValidationRules.MAX_CHARS_CAR_MODEL_DOOR} chars.`)
                    ];
                }
                static get modelBodyValidators(): ValidatorFn[] {
                    return [
                        ValidConfig.required("The model body requierd"),
                        ValidConfig.minLength(ValidationRules.MIN_CHARS_CAR_MODEL_BODY, `CAR MODEL body can't be shorter than ${ValidationRules.MIN_CHARS_CAR_MODEL_BODY} chars.`),
                        ValidConfig.maxLength(ValidationRules.MAX_CHARS_CAR_MODEL_BODY, `CAR MODEL body can't exceeds  ${ValidationRules.MAX_CHARS_CAR_MODEL_BODY} chars.`)
                    ];
                }
 /*  
  this.carTypeForm=this.fb.group({
    ModelMake:['',ValidateCar.fullNameValidators],//have to change valedator
    Model:['',ValidateCar.idValidators],
    ModelName:['',ValidateCar.idValidators],
    ModelYear:['',ValidateCar.idValidators],
    ModelWeightKg:['',ValidateCar.idValidators],
    ModelDoors:['',ValidateCar.idValidators],
    Gear:['',ValidateCar.idValidators],
    ModelBody:['',ValidateCar.idValidators],
    */
                static  childrenEqual: ValidatorFn = (formGroup: FormGroup) => {
                    const [firstControlName, ...otherControlNames] = Object.keys(formGroup.controls || {});
                    const isValid = otherControlNames.every(controlName => formGroup.get(controlName).value === formGroup.get(firstControlName).value);
                    return isValid ? null : { childrenNotEqual: true };
                }
                 /* regExps: { [key: string]: RegExp } = {
                    password: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
                 };*/

}