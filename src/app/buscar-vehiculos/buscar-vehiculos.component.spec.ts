import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarVehiculosComponent } from './buscar-vehiculos.component';

describe('BuscarVehiculosComponent', () => {
  let component: BuscarVehiculosComponent;
  let fixture: ComponentFixture<BuscarVehiculosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarVehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
