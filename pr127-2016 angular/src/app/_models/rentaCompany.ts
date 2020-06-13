import { Car } from './Car';


export class RentaCompany{
    id: string;
    name: string;
    adresa: string;
    promo: string;
    filijale: string;
    ocena: string;
    listaAuta: Car[];

    constructor(id:string,name:string,adresa:string,promo:string,filijale:string,ocena:string)
    {
        this.id = id;
        this.name=name;
        this.adresa=adresa;
        this.promo=promo;
        this.filijale=filijale;
        this.ocena = ocena;
    }
}