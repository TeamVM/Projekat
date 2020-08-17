import { Component, OnInit } from '@angular/core';
import { Car } from '../_models/Car';
import { RentaCompany } from '../_models/rentaCompany';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-istorija-rezervacija',
  templateUrl: './istorija-rezervacija.component.html',
  styleUrls: ['./istorija-rezervacija.component.scss']
})
export class IstorijaRezervacijaComponent implements OnInit {
  rentaCar: Car={
    img: '',
    ime: '',
    godiste: '',
    ocena: '',
    cena: '',
    idAuta: '',
    imeKompanije: '',
    lokacija: '',
    datumOd: '',
    datumDo: '',
    rezervisan: false
  }
  rentaCompany: RentaCompany= {
    id: '',
    name: '',
    adresa: '',
    promo: '',
    filijale:'',
    ocena: '' ,
    listaAuta:[]
};

  constructor(private route: ActivatedRoute, private sannitizer: DomSanitizer) { }

  ngOnInit(): void {
    // this.rentaCar.img = 'assets/bmw.jpg';
    // this.rentaCar.ime='BMW';
    // this.rentaCar.godiste= 2005;
    // this.rentaCar.ocena= 5;
    // this.rentaCar.cena='25e/day';
    // this.rentaCar.sifra= 3564;


    this.rentaCompany.listaAuta = [];
    this.rentaCompany.listaAuta.push(this.rentaCar);
    // this.rentaCompany.listaAuta.push(new Car('assets/ford.jpg', 'Ford', '2011', '5', '15e/day', '122','sda', 'sadd', 'dsadad', false));


  }

}