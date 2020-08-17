import { Component, OnInit } from '@angular/core';
import { Car } from '../_models/Car';
import { RentaCompany } from '../_models/rentaCompany';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DataService } from '../_models/searchedResult';
import { stringify } from 'querystring';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-renta-filter',
  templateUrl: './renta-filter.component.html',
  styleUrls: ['./renta-filter.component.scss']
})
export class RentaFilterComponent implements OnInit {
listOfCars: any;

  constructor(private carService: CarService, private dataService: DataService, private sannitizer: DomSanitizer, private router: Router) { }

  ngOnInit(): void {
    this.listOfCars = this.dataService.car;
  }

  rezervisi(idAuta: string) {
    this.carService.reserveCar(idAuta).subscribe((result) => { 
      if (result) {
        this.router.navigate(['/rezervisaoauto']);
      } else {
        this.router.navigate(['/nijerezervisaoauto']);
      }
    });
  }
}