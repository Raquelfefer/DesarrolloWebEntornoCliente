import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Equipo } from '../../models/equipo.model';
import { LigaService } from '../../services/liga.services';

@Component({
  selector: 'app-formulario-partidos',
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-partidos.html',
  styleUrl: './formulario-partidos.css',
})
export class FormularioPartidos {
  
  equipos: Equipo[];
  localId = ""; visitanteId = ""; golesLocal = 0; golesVisitante = 0;

  constructor(private service: LigaService){
    this.equipos = this.service.getEquipos();
  }

  actualizar(){

    if(this.golesLocal < 0 || this.golesVisitante < 0){
      alert("¡No puedes poner goles negativos!");
      return;
    }

    this.service.registrarPartido(this.localId, this.visitanteId, this.golesLocal, this.golesVisitante);
    this.golesLocal = 0; 
    this.golesVisitante = 0;
  }
}
