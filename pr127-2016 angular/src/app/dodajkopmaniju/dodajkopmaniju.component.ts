import { Component, OnInit } from '@angular/core';
import { RentaCompany } from '../_models/rentaCompany';
import { CarCompanyService } from '../services/carcompany.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dodajkopmaniju',
  templateUrl: './dodajkopmaniju.component.html',
  styleUrls: ['./dodajkopmaniju.component.scss']
})
export class DodajkopmanijuComponent implements OnInit {

  model: any = {};
  
  
  constructor(private service: CarCompanyService, private router:Router) { }



  ngOnInit(): void {
  }

  add(){
    this.service.addCompany(this.model).subscribe((result)=>{ this.router.navigate(['/listakompanija']);})

  }
}
