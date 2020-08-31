import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BazaKorisnikaComponent } from './baza-korisnika.component';

describe('BazaKorisnikaComponent', () => {
  let component: BazaKorisnikaComponent;
  let fixture: ComponentFixture<BazaKorisnikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BazaKorisnikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BazaKorisnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
