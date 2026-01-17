import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Encabezado } from '../../components/encabezado/encabezado';
import { PiePagina } from '../../components/pie-pagina/pie-pagina';
import { LigaService } from '../../services/liga.services';
import { Equipo } from '../../models/equipo.model';

@Component({
  selector: 'app-detalle-equipo',
  imports: [CommonModule, RouterModule, Encabezado, PiePagina],
  templateUrl: './detalle-equipo.html',
  styleUrl: './detalle-equipo.css',
})
export class DetalleEquipo implements OnInit{

  equipo: Equipo | undefined;
  constructor(private route: ActivatedRoute, private service: LigaService){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) this.equipo = this.service.getEquipoPorId(id);
  }

}
