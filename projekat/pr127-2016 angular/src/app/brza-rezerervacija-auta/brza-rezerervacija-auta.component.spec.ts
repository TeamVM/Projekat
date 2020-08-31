import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrzaRezerervacijaAutaComponent } from './brza-rezerervacija-auta.component';

describe('BrzaRezerervacijaAutaComponent', () => {
  let component: BrzaRezerervacijaAutaComponent;
  let fixture: ComponentFixture<BrzaRezerervacijaAutaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrzaRezerervacijaAutaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrzaRezerervacijaAutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
