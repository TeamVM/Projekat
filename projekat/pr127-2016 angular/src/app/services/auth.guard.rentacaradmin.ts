import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

Injectable({
    providedIn: 'root',
  })
  export class AurhGuardRentaAdmin implements CanActivate, CanActivateChild {
    constructor(private router: Router,public authService: AuthService) { }
    role : any;
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {    
      if (this.authService.returnTypeOfUser()=="rentaadmin") {
        return true;
      }
      // not logged in so redirect to login page
      else {
        console.error("Can't access, not login");
        this.router.navigate(['/home']);
        return false;
      }
    }
  
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      return this.canActivate(route, state);
    }
  
  }