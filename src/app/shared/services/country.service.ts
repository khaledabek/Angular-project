import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {CountryBasic} from './../models/countryBasic.model';

@Injectable()
export class CountryService{

    constructor(private httpClient:HttpClient){}


    
getCountriesInfo():Observable<CountryBasic[]>{
   return this.httpClient.get<CountryBasic[]>("https://restcountries.eu/rest/v2/all?fields=name;flag");
}

getCountries(func:(x:Array<any>)=>void):void{
    this.httpClient.get("https://restcountries.eu/rest/v2/all?fields=name")
    .subscribe(func);
}
}