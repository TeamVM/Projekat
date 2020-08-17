import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajkopmanijuComponent } from './dodajkopmaniju.component';

describe('DodajkopmanijuComponent', () => {
  let component: DodajkopmanijuComponent;
  let fixture: ComponentFixture<DodajkopmanijuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajkopmanijuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajkopmanijuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
