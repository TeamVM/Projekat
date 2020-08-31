import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { RegUser } from '../_models/User';

@Component({
  selector: 'app-baza-korisnika',
  templateUrl: './baza-korisnika.component.html',
  styleUrls: ['./baza-korisnika.component.scss']
})
export class BazaKorisnikaComponent implements OnInit {

  users: RegUser[];
  typesOfUsers: string[];
  selectedType: string = '';
  model = {};

  constructor(private service: UserService, private router:Router) { }

  ngOnInit(): void {
    this.typesOfUsers = ['korisnik', 'rentadmin'];

    this.service.getAllUsers().subscribe((result)=> { 
      this.users = result;
      console.log(this.users);
    });
  }

  save(): void {
    this.service.changeTypeOfUsersInDB(this.users).subscribe(() => {
      
    });
  }
}
