import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NijeRezervisaoAutoComponent } from './nije-rezervisao-auto.component';

describe('NijeRezervisaoAutoComponent', () => {
  let component: NijeRezervisaoAutoComponent;
  let fixture: ComponentFixture<NijeRezervisaoAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NijeRezervisaoAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NijeRezervisaoAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
