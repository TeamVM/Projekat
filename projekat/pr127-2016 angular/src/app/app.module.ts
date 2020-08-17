import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import {BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Company1reComponent } from './company1re/company1re.component';
import { ListOfRentaCarsCompaniesComponent } from './list-of-renta-cars-companies/list-of-renta-cars-companies.component';
import { IzvestajComponent } from './izvestaj/izvestaj.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { HttpService } from './services/httpService.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IstorijaRezervacijaComponent } from './istorija-rezervacija/istorija-rezervacija.component';
import { RentaFilterComponent } from './renta-filter/renta-filter.component'
import { AuthService } from './services/auth.service';
import { DodajkopmanijuComponent } from './dodajkopmaniju/dodajkopmaniju.component';
import { CarCompanyService } from './services/carcompany.service';
import { DodajautoComponent } from './dodajauto/dodajauto.component';
import { CarService } from './services/car.service';
import { ListakompanijaComponent } from './listakompanija/listakompanija.component';
import { DataService } from './_models/searchedResult';
import { RezervisaoAutoComponent } from './rezervisao-auto/rezervisao-auto.component';
import { NijeRezervisaoAutoComponent } from './nije-rezervisao-auto/nije-rezervisao-auto.component';
import { AuthGuard } from './_guards/auth.guard';
import { AlertifyService } from './services/alertify.service';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent},
  { path: "home", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "company/:id", component: Company1reComponent},
  { path: "companies",component:ListOfRentaCarsCompaniesComponent},
  { path: "izvestaj", component:IzvestajComponent, canActivate: [AuthGuard]},
  { path: "rezervacija", component:RezervacijaComponent, canActivate: [AuthGuard]},
  { path: "rentafilter", component:RentaFilterComponent, canActivate: [AuthGuard]},
  { path: "istorija-rezervacija", component:IstorijaRezervacijaComponent, canActivate: [AuthGuard]},
  { path: "dodajkompaniju" , component:DodajkopmanijuComponent, canActivate: [AuthGuard]},
  { path: "dodajauto", component:DodajautoComponent, canActivate: [AuthGuard]},
  { path: "nijerezervisaoauto", component:NijeRezervisaoAutoComponent, canActivate: [AuthGuard]},
  { path: "rezervisaoauto", component:RezervisaoAutoComponent, canActivate: [AuthGuard]},
  { path: "listakompanija", component:ListakompanijaComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    Company1reComponent,
    ListOfRentaCarsCompaniesComponent,
    IzvestajComponent,
    RezervacijaComponent,
    IstorijaRezervacijaComponent,
    RentaFilterComponent,
    DodajkopmanijuComponent,
    DodajautoComponent,
    ListakompanijaComponent,
    RezervisaoAutoComponent,
    NijeRezervisaoAutoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
 //   AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    HttpService,
    CarCompanyService,
    CarService,
    DataService,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
