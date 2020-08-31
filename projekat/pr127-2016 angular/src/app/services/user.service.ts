import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegUser } from '../_models/User';



@Injectable({
    providedIn: 'root'
  })
  export class UserService {
    base_url = "http://localhost:5000/api/User";
    
    constructor(private http: HttpClient) { }

    

    getAllUsers():Observable<RegUser[]>{
        return this.http.get<RegUser[]>(this.base_url);
    }

    changeTypeOfUsersInDB(users: RegUser[]):Observable<RegUser[]> {
        return this.http.post<RegUser[]>(this.base_url, users);
    }
}