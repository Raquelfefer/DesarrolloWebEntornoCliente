import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Alumno } from './models/alumno';
import { Convenio } from './models/convenio';
import { Empresa } from './models/empresa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  
  public alumno1!: Alumno;
  public alumno2!: Alumno;
  public convenio!: Convenio;
  public empresa!: Empresa;

  public aliasResultado: string = '';
  public listaNombres: string[] = [];
  public mediaResultado: number = 0;
  public horasTotales: number = 0;
  public sesiones: number = 0;



  ngOnInit(): void {
    this.alumno1 = new Alumno('Pedro', 'Gutierrez Perez', new Date('1991-03-08'), 'pedro@gmail.com', 7.87);
    this.alumno2 = new Alumno('Maria', 'Morales Peña', new Date('2002-12-15'), 'maria@gmail.com', 9.54);

    this.convenio = new Convenio(new Date('2025-03-01'), new Date('2025-04-01'), [this.alumno1, this.alumno2], 400);
    
    this.empresa = new Empresa('APPSUR', 345, [this.convenio]);
  }

  probarAlias(){
    this.aliasResultado = this.alumno1.obten_alias();
  }

  probarListado(){
    this.listaNombres = this.empresa.listado_alumnos();
  }

  probarMedia(){
    this.mediaResultado = this.empresa.nota_media_alumnos();
  }

  probarHoras(){
    this.horasTotales = this.empresa.total_horas();
  }

  probarNumSesiones(){
    this.sesiones = this.convenio.num_sesiones();
  }

}
