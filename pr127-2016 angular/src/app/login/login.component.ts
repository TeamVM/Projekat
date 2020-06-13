import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login( ){
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in succes');
    }, error => {
      console.log('Failder to login');
    });
  }

}
