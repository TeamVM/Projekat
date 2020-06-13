import { Component, OnInit, Input } from '@angular/core';
import { RentaCompany } from '../_models/rentaCompany';

@Component({
  selector: 'app-list-of-renta-cars-companies',
  templateUrl: './list-of-renta-cars-companies.component.html',
  styleUrls: ['./list-of-renta-cars-companies.component.scss']
})
export class ListOfRentaCarsCompaniesComponent implements OnInit {

 rentaCompany: RentaCompany = {
    id: '0',
    name: 'SpeedAuto',
    adresa: 'Vojvode stepe',
    promo: 'Opa',
    filijale:'Novi sad',
    ocena: '3' ,
    listaAuta:[]
  };

  listOfCompanies:RentaCompany[]=[];


  constructor() { }

  ngOnInit(): void {
    this.listOfCompanies.push(this.rentaCompany);
  }

}
