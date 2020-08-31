import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { JwtHelperService} from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: "root"
})
export class AuthService{
    private tipKorisnika = new BehaviorSubject<string>("");
    data = this.tipKorisnika.asObservable();

        baseUrl = "http://localhost:5000/api/auth/";
    
        jwtHelper1 = new JwtHelperService();
        
      
    constructor(private http: HttpClient) {}


    login(model: any){

        return this.http.post(this.baseUrl + 'login', model).pipe(
            map((response: any) => {
                const user = response;
                  
                if(user){

                    localStorage.setItem('token', user.token);
                    var decodedToken = this.jwtHelper1.decodeToken(user.token);
                    this.tipKorisnika.next(decodedToken?.role);
                }
            })
        );
    }

    register(model:any){
      //  console.log(model);
        return this.http.post(this.baseUrl + 'register',model); 
    }

    loggedIn(){
        const token = localStorage.getItem('token');


        return !this.jwtHelper1.isTokenExpired(token);
    }

    isHeadAdmin() { 
        const token = localStorage.getItem('token');
        var decodedToken = this.jwtHelper1.decodeToken(token);

        return decodedToken?.role === "HeadAdmin";
    }


    returnTypeOfUser(){
        console.log("KORISNIK232");
        if(localStorage.getItem('token') != "null" && localStorage.getItem('token') != "undefined" && localStorage.getItem('token') != ""){
           console.log(localStorage.getItem('token'),"dsada");
            if(localStorage.jwt == undefined)
            { 
              return;
            }
           
            let jwtData = localStorage.getItem('token').split('.')[1];
            let decodedJwtJsonData = window.atob(jwtData);
            
            let decodedJwtData = JSON.parse(decodedJwtJsonData);
         //   console.log("KORISNIK3",decodedJwtData);
            if(localStorage.jwt !== undefined){
          //     console.log("KORISNIK",decodedJwtData.role);
                return decodedJwtData.role;
            }

        //    console.log("KORISNIK",decodedJwtData.role);
          }
    }
    logout() { 
        localStorage.removeItem('token');
        this.tipKorisnika.next("");
    }
}