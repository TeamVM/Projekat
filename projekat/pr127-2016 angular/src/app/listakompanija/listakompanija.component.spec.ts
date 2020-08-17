import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListakompanijaComponent } from './listakompanija.component';

describe('ListakompanijaComponent', () => {
  let component: ListakompanijaComponent;
  let fixture: ComponentFixture<ListakompanijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListakompanijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListakompanijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
