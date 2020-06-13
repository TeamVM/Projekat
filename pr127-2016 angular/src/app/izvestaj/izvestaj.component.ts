import { Component, OnInit } from '@angular/core';
import { IzvestajTable } from '../_models/izvestajTable';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Car } from '../_models/Car';

@Component({
  selector: 'app-izvestaj',
  templateUrl: './izvestaj.component.html',
  styleUrls: ['./izvestaj.component.scss']
})
export class IzvestajComponent implements OnInit {
  izvestajTable: IzvestajTable={
       sifra: '123',
       status: '',
       period: '23/05/2019',
       prihodN: '20e',
       prihodM: '30e',
       prihodG: '40e'
      };
      rentaCar: Car={
        img: '',
        ime: '',
        godiste: '',
        ocena: '',
        cena: '',
        idAuta: '',
        lokacija: '',
        datumOd: '',
        datumDo: '',
        imeKompanije:'',
        rezervisan: false
      }

  constructor(private route: ActivatedRoute, private sannitizer: DomSanitizer) { }

  ngOnInit(): void {

      this.izvestajTable.sifra= '123';
      this.izvestajTable.status = 'slbodan';
      this.izvestajTable.prihodN= '15e';
      this.izvestajTable.prihodM= '70e';
      this.izvestajTable.prihodG= '700e';
      this.izvestajTable.period= '23/05/3-25/05/3'
      this.rentaCar.ocena= '5';

  }

}
