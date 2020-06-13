
export class Car {
    img: string;
    ime: string;
    godiste: string;
    ocena: string;
    cena: string;
    idAuta: string;
    lokacija: string;
    datumOd: string;
    datumDo: string;
    imeKompanije: string;
    rezervisan: boolean;

    constructor(imeKompanije:string,img:string,ime:string,godiste:string,ocena:string,cena:string,sifra:string, lokacija: string,datumOd: string,datumDo: string, rezervisan:boolean){
        this.img=img;
        this.ime=ime;
        this.godiste=godiste;
        this.ocena=ocena;
        this.cena=cena;
        this.idAuta=sifra;
        this.lokacija=lokacija;
        this.datumOd = datumOd;
        this.datumDo = datumDo;
        this.rezervisan = rezervisan;
        this.imeKompanije = imeKompanije;
    }
}

