import { Component } from '@angular/core';
import { Encabezado } from '../../components/encabezado/encabezado';
import { PiePagina } from '../../components/pie-pagina/pie-pagina';
import { TablaClasificacion } from '../../components/tabla-clasificacion/tabla-clasificacion';
import { FormularioPartidos } from '../../components/formulario-partidos/formulario-partidos';

@Component({
  selector: 'app-inicio',
  imports: [
    Encabezado,
    PiePagina,
    TablaClasificacion,
    FormularioPartidos
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

}
