import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfRentaCarsCompaniesComponent } from './list-of-renta-cars-companies.component';

describe('ListOfRentaCarsCompaniesComponent', () => {
  let component: ListOfRentaCarsCompaniesComponent;
  let fixture: ComponentFixture<ListOfRentaCarsCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfRentaCarsCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfRentaCarsCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
