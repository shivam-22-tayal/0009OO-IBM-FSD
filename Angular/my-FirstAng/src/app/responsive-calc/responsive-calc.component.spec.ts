import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveCalcComponent } from './responsive-calc.component';

describe('ResponsiveCalcComponent', () => {
  let component: ResponsiveCalcComponent;
  let fixture: ComponentFixture<ResponsiveCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsiveCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
