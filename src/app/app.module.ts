import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadorSeleccionComponent } from './jugador-seleccion/jugador-seleccion.component';
import { ListaJugadoresComponent } from './lista-jugadores/lista-jugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadorSeleccionComponent,
    ListaJugadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
