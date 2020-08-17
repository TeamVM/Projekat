export class SearchModel{
    Location: boolean;
    Name: boolean;
    SearchText: string;
    DateFrom: string;
    DateTo: string;
    Price: Number;

    // constructor() {};

    constructor(location:boolean, name:boolean, searchText: string, dateFrom:string, dateTo: string, price: Number) {
        this.Location = location;
        this.Name = name;
        this.SearchText = searchText;
        this.DateFrom = dateFrom;
        this.DateTo = dateTo;
        this.Price = price;
    };
}