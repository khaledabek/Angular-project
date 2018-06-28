import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CarStatus, Reservation, CarType } from './../models/Car.model';
//import { CarData } from './../data/Cars.data';
import { of } from 'rxjs/observable/of';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable()
export class CarService {

    constructor(private httpClient: HttpClient) { }

    getCarsInfo()  {//Observable <CarStatus>
       return this.httpClient.get<Array<CarStatus>>(`http://localhost:28468/api/car_status/all`)
        .toPromise()
    }
    
    getCarsStatusInfo(callBack:(b:Array<CarStatus>)=>void): void {
         this.httpClient.get<Array<CarStatus>>(`http://localhost:28468/api/car_status/all`).subscribe(callBack)
    }

    getCarInfo(PlateNumber:number): Observable<CarStatus> {
       return this.httpClient.get<CarStatus>(`http://localhost:28468/api/car_status/${PlateNumber}`);
    }
    RemoveCar(car:CarStatus,callBack):void{
        this.httpClient.delete<boolean>(`http://localhost:28468/api/car_status/delete/${car.PlateNumber}`)
        .subscribe(callBack);
    }
    EditCar(car:CarStatus,callBack):void{
      this.httpClient.put<boolean>(`http://localhost:28468/api/car_status/put`,car)
      .subscribe(callBack);
    }
//Cart
    getCartInfo(userName: string): Observable<Array<Reservation>> {

        return this.httpClient.get<Array<Reservation>>(`http://localhost:28468/api/Reservation/${userName}`)
    }
    AddCar(newCar:CarStatus,callBack):void{
        this.httpClient.post<boolean>(`http://localhost:28468/api/car_status/add`,newCar)
        .subscribe(callBack);
        console.log(newCar);
    }

    AddcarType(newCar:CarType,callBack):void{
        this.httpClient.post<boolean>(`http://localhost:28468/api/car_type/add`,newCar)
        .subscribe(callBack);
    }

}