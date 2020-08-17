import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajautoComponent } from './dodajauto.component';

describe('DodajautoComponent', () => {
  let component: DodajautoComponent;
  let fixture: ComponentFixture<DodajautoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajautoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajautoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
