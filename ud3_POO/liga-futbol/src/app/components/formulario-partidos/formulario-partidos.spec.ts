import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPartidos } from './formulario-partidos';

describe('FormularioPartidos', () => {
  let component: FormularioPartidos;
  let fixture: ComponentFixture<FormularioPartidos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioPartidos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPartidos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
