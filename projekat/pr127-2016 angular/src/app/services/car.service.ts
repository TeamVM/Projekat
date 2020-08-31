import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../_models/Car';
import { SearchModel } from '../_models/SearchModel';
import { SpeedCar } from '../_models/SpeedCar';



@Injectable({
    providedIn: 'root'
  })
  export class CarService {
    base_url = "http://localhost:5000/api/Cars";
    
    constructor(private http: HttpClient) { }

    

    addCar(model:any){
      return this.http.post("http://localhost:5000/api/Renta/AddCar",model);
    }

    addSpeedCar(model:any){
      return this.http.post("http://localhost:5000/api/Renta/AddSpeedCar",model);
    }
    
    getAllCars():Observable<Car[]>{
      return this.http.get<Car[]>(this.base_url);
    }

    getAllSpeedCars():Observable<SpeedCar[]>{
      console.log("gadja");
      return this.http.get<SpeedCar[]>(this.base_url + "/SpeedCars");
    }


    getCarbyname(name:string):Observable<Car[]>
    {
      return this.http.get<Car[]>(this.base_url+"/GetCar/"+name);
    }
   
    searchForCars(model: SearchModel) {
      return this.http.post<SearchModel[]>(this.base_url + "/SearchForCars", model);
    }
   
    reserveCar(auto: string) {
      console.log(auto);
      return this.http.post<boolean>(this.base_url + "/ReserveCar", auto);
    }
    reserveSpeedCar(auto: string) {
      console.log(auto);
      return this.http.post<boolean>(this.base_url + "/ReserveSpeedCar", auto);
    }
   
    deleteCar(IDAuta: string) {
      console.log(IDAuta);
      return this.http.post<boolean>(this.base_url + "/DeleteCar", IDAuta);
    }

    saveCarGrade(car: Car) {
      return this.http.post<void>(this.base_url + "/SaveCarGrade", car);
    }
}