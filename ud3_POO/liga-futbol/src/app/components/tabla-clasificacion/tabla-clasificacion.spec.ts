import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaClasificacion } from './tabla-clasificacion';

describe('TablaClasificacion', () => {
  let component: TablaClasificacion;
  let fixture: ComponentFixture<TablaClasificacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaClasificacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaClasificacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
