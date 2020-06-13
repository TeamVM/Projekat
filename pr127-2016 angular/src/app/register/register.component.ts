import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  // RegistracijaForma: FormGroup;
  // RegistrovaniKorisnik:RegUser;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // this.RegistracijaForma = new FormGroup({
    //   'name': new FormControl(null, [Validators.required]),
    //   'email': new FormControl(null, [Validators.required]),
    //   'username': new FormControl(null, [Validators.required]),
    //   'password': new FormControl(null, [Validators.required]),
    //   'city': new FormControl(null, [Validators.required]),
    //   'lastName': new FormControl(null, [Validators.required]),
    //   'number': new FormControl(null, [Validators.required])
    // });
  }
   register(/*korisnik:RegUser*/){
    // console.log(korisnik);
    this.authService.register(this.model).subscribe(() => {
      console.log("registration succes");
    }, err => {
      console.log(err);
    });
  }

  // onSubmit(){
  //   this.RegistrovaniKorisnik=this.RegistracijaForma.value;
  //   this.RegistrovaniKorisnik.id='1'
  //   console.log(this.RegistrovaniKorisnik);
  //   this.register(this.RegistrovaniKorisnik);
  // }



}
