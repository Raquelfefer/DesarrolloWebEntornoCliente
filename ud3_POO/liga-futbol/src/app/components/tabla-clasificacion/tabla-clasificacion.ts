import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Equipo } from '../../models/equipo.model';
import { LigaService } from '../../services/liga.services';

@Component({
  selector: 'app-tabla-clasificacion',
  imports: [CommonModule, RouterModule],
  templateUrl: './tabla-clasificacion.html',
  styleUrl: './tabla-clasificacion.css',
})
export class TablaClasificacion implements OnInit {
 
  equipos: Equipo[] = [];
  constructor(private service: LigaService){}
  ngOnInit(): void {
    this.equipos = this.service.getEquipos();

    this.service.equiposActualizados.subscribe(()  => {
      this.equipos = this.service.getEquipos();
    });
  }
  
}
