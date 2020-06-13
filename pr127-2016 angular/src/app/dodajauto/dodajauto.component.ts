import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-dodajauto',
  templateUrl: './dodajauto.component.html',
  styleUrls: ['./dodajauto.component.scss']
})
export class DodajautoComponent implements OnInit {

  model: any={};
  constructor(private service: CarService) { }

  ngOnInit(): void {
  }
  
  add(){
    console.log(this.model);
    this.service.addCar(this.model).subscribe((result)=>{console.log("POVEZAO");})
  }

}