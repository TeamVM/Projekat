import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentaCompany } from '../_models/rentaCompany';
import { SearchModel } from '../_models/SearchModel';


@Injectable({
    providedIn: 'root'
})

export class CarCompanyService{
  
    base_url = "http://localhost:5000/api/Renta";

    constructor(private http: HttpClient) { }

    getCompanies(): Observable<RentaCompany[]> {
        return this.http.get<RentaCompany[]>(this.base_url + "/Car");
    }

    getCompanyById(id: string): Observable<RentaCompany> {
        return this.http.get<RentaCompany>(this.base_url + "/Car/" + id);
    }

    addCompany(model:any){
        return this.http.post(this.base_url+"/AddCarCompany",model);
    }

    editCompany(company:RentaCompany){
        return this.http.post(this.base_url+"/EditCarCompany/"+company.id,company);
    }

    deleteCompany(id: string){
        return this.http.post(this.base_url+"/DeleteCarCompany", id);
    }
}


