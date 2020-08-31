import { Component, OnInit } from '@angular/core';
import { IzvestajTable } from '../_models/izvestajTable';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Car } from '../_models/Car';
import { CarService } from '../services/car.service';
import { CarCompanyService } from '../services/carcompany.service';
import { RentaCompany } from '../_models/rentaCompany';

@Component({
  selector: 'app-izvestaj',
  templateUrl: './izvestaj.component.html',
  styleUrls: ['./izvestaj.component.scss']
})
export class IzvestajComponent implements OnInit {
  // izvestajTable: IzvestajTable={
  //      sifra: '123',
  //      status: '',
  //      period: '23/05/2019',
  //      prihodN: '20e',
  //      prihodM: '30e',
  //      prihodG: '40e'
  //     };
  //     rentaCar: Car={
  //       img: '',
  //       ime: '',
  //       godiste: '',
  //       ocena: '',
  //       cena: '',
  //       idAuta: '',
  //       lokacija: '',
  //       datumOd: '',
  //       datumDo: '',
  //       imeKompanije:'',
  //       rezervisan: false
  //     }

  listOfCompanies: RentaCompany[];
  listOfCars: Car[];

  constructor(private route: ActivatedRoute, private sannitizer: DomSanitizer, private service: CarCompanyService, private carService: CarService, private router:Router) { }

  ngOnInit(): void {
    this.service.getCompanies().subscribe(result => {
      this.listOfCompanies = result;
    });

    this.carService.getAllCars().subscribe(result => {
      this.listOfCars = result;
    })
  }

  saveCompanyGrade(company: RentaCompany): void {
    this.service.saveCompanyGrade(company).subscribe();
    this.router.navigate(['company/' + company.id]);
  }

  saveCarGrade(car: Car): void {
    this.carService.saveCarGrade(car).subscribe();
  }
}
