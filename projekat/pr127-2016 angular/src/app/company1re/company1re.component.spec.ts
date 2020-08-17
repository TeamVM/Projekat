import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Company1reComponent } from './company1re.component';

describe('Company1reComponent', () => {
  let component: Company1reComponent;
  let fixture: ComponentFixture<Company1reComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Company1reComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Company1reComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
