import { Component, OnInit } from '@angular/core';
import { JugadorSeleccion } from '../models/jugador-seleccion.model';

@Component({
  selector: 'app-lista-jugadores',
  templateUrl: './lista-jugadores.component.html',
  styleUrls: ['./lista-jugadores.component.css']
})
export class ListaJugadoresComponent implements OnInit {
  jugadores : JugadorSeleccion[];
  constructor(){
		this.jugadores = [];
	}


  ngOnInit(): void {
  }

  save(nombre:string,apellido:string,numero:string,posicion:string) : boolean {
  	this.jugadores.push(new JugadorSeleccion(nombre,apellido,numero,posicion));
  	return false;
  }

}
