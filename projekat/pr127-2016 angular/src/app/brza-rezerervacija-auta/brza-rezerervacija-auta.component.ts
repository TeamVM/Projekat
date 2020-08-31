import { Component, OnInit } from '@angular/core';
import { SpeedCar } from '../_models/SpeedCar';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brza-rezerervacija-auta',
  templateUrl: './brza-rezerervacija-auta.component.html',
  styleUrls: ['./brza-rezerervacija-auta.component.scss']
})
export class BrzaRezerervacijaAutaComponent implements OnInit {

  cars:SpeedCar[]=[];

  constructor(private service: CarService,private router: Router, private carService: CarService) { }

  ngOnInit(): void {

    this.service.getAllSpeedCars().subscribe(res=>{
     
      
      this.cars=res
      console.log(this.cars);
      
    });
  }

  Rezervisi(idAuta: string) {
    alert('Rezervisali ste sa 20 posto popusta!');
        this.router.navigate(['/rezervisaoauto']);
  }
  reserve(id)
  {
    localStorage.setItem('idcar', id);
    this.router.navigate(['passengerspeeddata']);
  }

}
