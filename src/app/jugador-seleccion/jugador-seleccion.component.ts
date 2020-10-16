import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { JugadorSeleccion } from '../models/jugador-seleccion.model';

@Component({
  selector: 'app-jugador-seleccion',
  templateUrl: './jugador-seleccion.component.html',
  styleUrls: ['./jugador-seleccion.component.css']
})
export class JugadorSeleccionComponent implements OnInit {
@Input() jugador: JugadorSeleccion;
@HostBinding('attr.class') cssClass= 'col-md-4 pb-4';

  constructor() {}

  ngOnInit(): void {}

}
