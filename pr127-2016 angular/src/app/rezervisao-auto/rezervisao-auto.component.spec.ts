import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RezervisaoAutoComponent } from './rezervisao-auto.component';

describe('RezervisaoAutoComponent', () => {
  let component: RezervisaoAutoComponent;
  let fixture: ComponentFixture<RezervisaoAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RezervisaoAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RezervisaoAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
