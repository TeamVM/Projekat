import{Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertifyService } from '../services/alertify.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router, private alertify:AlertifyService) {}

    canActivate(): boolean {
        if (this.authService.loggedIn()){
            return true;
        }

        this.alertify.error('You are not allowed! Please log in or sign up to continue.');
        this.router.navigate(['/']);
        return false;
    }
}