import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureCalculatorComponent } from './temperature.calculator.component';

describe('Temperature.CalculatorComponent', () => {
  let component: TemperatureCalculatorComponent;
  let fixture: ComponentFixture<TemperatureCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
