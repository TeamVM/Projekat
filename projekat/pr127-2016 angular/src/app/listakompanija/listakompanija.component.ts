import { Component, OnInit } from '@angular/core';
import { CarCompanyService } from '../services/carcompany.service';
import { Router } from '@angular/router';
import { RentaCompany } from '../_models/rentaCompany';

@Component({
  selector: 'app-listakompanija',
  templateUrl: './listakompanija.component.html',
  styleUrls: ['./listakompanija.component.scss']
})
export class ListakompanijaComponent implements OnInit {

  carCompanies: RentaCompany[];
  constructor(private service: CarCompanyService, private router:Router) { }

  ngOnInit(): void {
    this.service.getCompanies().subscribe((result) => { this.carCompanies = result; });
  }

  viewCarCompany(Id: string) {
    this.router.navigate(['company/' + Id]);
    // this.service.getCompanyById(Id).subscribe((result) => { router });
  }
}
