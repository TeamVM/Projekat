import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { CarCompanyService } from '../services/carcompany.service';
import { SearchModel } from '../_models/SearchModel';
import { Router, ActivatedRoute } from '@angular/router';
import { Car } from '../_models/Car';
import { DataService } from '../_models/searchedResult';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  model: any = {};
  listOfCars: any[];
  constructor(private carService: CarService, private dataService: DataService, private router:Router) { }

  ngOnInit(): void {
  }

  search() {
    console.log(this.model);

    if (this.model.location) {
      this.model.location = true;
      this.model.name = false;
    } else {
      this.model.location = false;
      this.model.name = true;
    }

    var searchModel: SearchModel = new SearchModel(this.model.location, this.model.name, this.model.searchText, this.model.dateFrom, this.model.dateTo, this.model.price);
    this.carService.searchForCars(searchModel).subscribe((result) => { this.dataService.car = result; this.router.navigate(['/rentafilter']); });
  }
}
