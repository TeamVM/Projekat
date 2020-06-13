import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../_models/Car';
import { SearchModel } from '../_models/SearchModel';



@Injectable({
    providedIn: 'root'
  })
  export class CarService {
    base_url = "http://localhost:5000/api/Cars";
    
    constructor(private http: HttpClient) { }

    

    addCar(model:any){
      return this.http.post("http://localhost:5000/api/Renta/AddCar",model);
    }

    getAllCars():Observable<Car[]>{
      return this.http.get<Car[]>(this.base_url+"/Cars");
    }


    getCarbyname(name:string):Observable<Car[]>
    {
      return this.http.get<Car[]>(this.base_url+"/GetCar/"+name);
    }
   
    searchForCars(model: SearchModel) {
      return this.http.post<SearchModel[]>(this.base_url + "/SearchForCars", model);
    }
   
    reserveCar(IDAuta: string) {
      console.log(IDAuta);
      return this.http.post<boolean>(this.base_url + "/ReserveCar", IDAuta);
    }
   
    deleteCar(IDAuta: string) {
      console.log(IDAuta);
      return this.http.post<boolean>(this.base_url + "/DeleteCar", IDAuta);
    }
}