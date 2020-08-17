import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaFilterComponent } from './renta-filter.component';

describe('RentaFilterComponent', () => {
  let component: RentaFilterComponent;
  let fixture: ComponentFixture<RentaFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentaFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
