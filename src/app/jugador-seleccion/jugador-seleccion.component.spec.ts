import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorSeleccionComponent } from './jugador-seleccion.component';

describe('JugadorSeleccionComponent', () => {
  let component: JugadorSeleccionComponent;
  let fixture: ComponentFixture<JugadorSeleccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorSeleccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorSeleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
