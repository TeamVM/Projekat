import { Component, OnInit } from '@angular/core';
import { RentaCompany } from '../_models/rentaCompany';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Car } from '../_models/Car';
import { ltLocale } from 'ngx-bootstrap/chronos/i18n/lt';
import { CarCompanyService } from '../services/carcompany.service';
import { CarService } from '../services/car.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-company1re',
  templateUrl: './company1re.component.html',
  styleUrls: ['./company1re.component.scss']
})
export class Company1reComponent implements OnInit {
  editButton=false;
  editCompany=false;
  updateButton=false;
  obrisiButton= false;
  rezervisiButton=false;
  idComp=null;
  rentadmin = false;
  headadmin = false;
  korisnik = false;

  ukupnaCenaAuta = [];

  rentaCompany: RentaCompany= {
      id: '',
      name: '',
      adresa: '',
      promo: '',
      filijale:'',
      ocena: '' ,
      listaAuta:[],
  };
  tipUsera:string;
  constructor(private route: ActivatedRoute, 
    private service: CarCompanyService,
     private carService: CarService, 
     private router:Router, private authService: AuthService,
     private sanitizer : DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => { 
      this.idComp=res.id;
      this.service.getCompanyById(res.id).subscribe((res) => {  this.rentaCompany = res; 

      } );
    });

    this.authService.data.subscribe(_res => { 
      this.tipUsera = _res;
      console.log(_res);
      if(_res == "rentadmin") { 
        this.editButton = true;
        this.updateButton = true;
        this.obrisiButton = true;
        this.rentadmin = true;
        this.rezervisiButton = true;
        this.headadmin = false;
        this.korisnik = true;
      }
      else if(_res == "HeadAdmin") { 
        this.headadmin = true;
        this.editButton = false;
        this.updateButton = false;
        this.obrisiButton = true;
        this.rentadmin = true;
        this.rezervisiButton = true;
        this.korisnik = true;
      }
      else if(_res == "Korisnik") { 
        this.headadmin = false;
        this.editButton = false;
        this.updateButton = false;
        this.obrisiButton = false;
        this.rentadmin = false;
        this.rezervisiButton = true;
        this.korisnik = true;
      }
      else { 
        this.headadmin = false;
        this.editButton = false;
        this.updateButton = false;
        this.obrisiButton = false;
        this.rentadmin = false;
        this.korisnik = false;
        this.rezervisiButton = false;
      }
    });

  }

  public getSafeUrl(url: string) { 
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  rezervisi(auto: any) {
    this.carService.reserveCar(auto).subscribe((result) => { 
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

  changedDate(index: number) {
    if (this.rentaCompany.listaAuta[index].datumOd != undefined && this.rentaCompany.listaAuta[index].datumDo != undefined) {
      const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * millisecondss
      const dateFrom = new Date(this.rentaCompany.listaAuta[index].datumOd);
      const dateTo = new Date(this.rentaCompany.listaAuta[index].datumDo);
      let brojDana = Math.round(Math.abs((dateTo.getTime() - dateFrom.getTime()) / oneDay));
      this.ukupnaCenaAuta[index] = Number(this.rentaCompany.listaAuta[index].cena) * brojDana;
    }
  }
}    
