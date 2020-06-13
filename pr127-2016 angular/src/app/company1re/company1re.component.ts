import { Component, OnInit } from '@angular/core';
import { RentaCompany } from '../_models/rentaCompany';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Car } from '../_models/Car';
import { ltLocale } from 'ngx-bootstrap/chronos/i18n/lt';
import { CarCompanyService } from '../services/carcompany.service';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-company1re',
  templateUrl: './company1re.component.html',
  styleUrls: ['./company1re.component.scss']
})
export class Company1reComponent implements OnInit {
  editButton=true;
  editCompany=true;
  idComp=null;


  rentaCompany: RentaCompany= {
      id: '',
      name: '',
      adresa: '',
      promo: '',
      filijale:'',
      ocena: '' ,
      listaAuta:[]
  };
  constructor(private route: ActivatedRoute, private sannitizer: DomSanitizer, private service: CarCompanyService, private carService: CarService, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => { 
      console.log(res.id)
      this.idComp=res.id;
      
      // console.log('res: ', res);
      this.service.getCompanyById(res.id).subscribe((res) => {  this.rentaCompany = res;   } );
      
    });
    console.log(this.idComp);
      
      console.log(this.rentaCompany.id);
      console.log(this.rentaCompany);
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


  obrisi(idAuta) {
    this.carService.deleteCar(idAuta).subscribe((result) => { 
      if (result) {
        this.router.navigate(['/listakompanija']);
      }
    });
  }

  obrisiKompaniju(kompanja) {
    this.service.deleteCompany(kompanja).subscribe((result) => {
      this.router.navigate(['/listakompanija']);
    })
  }
  edit(){
    this.rentaCompany.id=this.idComp;
    console.log(this.rentaCompany);
    this.editCompany=false;
  }
  update(){
    
    this.service.editCompany(this.rentaCompany).subscribe((result)=>{
      console.log(this.rentaCompany);
    })
  }
}    
