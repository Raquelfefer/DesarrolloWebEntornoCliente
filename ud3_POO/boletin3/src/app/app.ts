import { TmplAstDeferredBlockPlaceholder } from '@angular/compiler';
import { Component, OnInit, signal } from '@angular/core';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
import { RouterOutlet } from '@angular/router';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

//Todo componente que implementa onInit
//debe definir un metodo llamado ngOninit que se ejecuta nada más cargar la página
//seria lo equivalente al window.onload de temas anteriores(js y ts nativo)
export class App implements OnInit{
  protected readonly title = signal('boletin3');

  //Ejercicio 1
  public datos: number[] = [1,7,8,3,4,9];
  public compis: string[] = ["Juan", "Xexu", "Pedro", "María", "Alberto", "Antonio"];
  public alumnos: Alumno[] = [];

  ngOnInit(): void {
    console.log("Datos = " + this.datos);
    console.log("Alumnos = " + this.compis);
    const alumno1 = new Alumno("Ana", "García López", new Date("1998-05-12"), 2, 1, 4);
    const alumno2 = new Alumno("Luis", "Martínez Ruiz", new Date("2001-03-20"), 5, 7, 7);
    const alumno3 = new Alumno("María", "Pérez Soto", new Date("1995-11-08"), 3, 9, 10);
    const alumno4 = new Alumno("Pedro", "Gómez Díaz", new Date("2002-07-15"), 6, 7, 5);
    this.alumnos.push(alumno1,alumno2,alumno3,alumno4);
  }

  public dobleDatos(): void{
    //Funcional
    /* let doble: number[] = [];
    for(let i = 0; i < this.datos.length; i++){
      doble.push(2*this.datos[i]);
    }
    console.log(doble); */

    //Funciones flecha
    console.log(this.datos.map(n => n*2));
  }

  //Ejercicio 2
  public mayorCinco(): void{
    console.log(this.datos.filter(n => n>=5));
  }

  //Ejercicio 3
  public ordena(flag: boolean): void{
    if(flag){
      console.log(this.datos.sort((a,b) => a - b));
    }else{
      console.log(this.datos.sort((a,b) => b - a));
    }
  }

  //Ejercicio 4
  public muestraAlumnosMayusculayA(): void{
    console.log(this.compis
      .map(a => a.toUpperCase())
      .filter(a => a.startsWith("A")));
  }

  //Ejercicio 5 (toFixed convierte los numeros en string)
  public mediaDatos(): void{
    console.log((this.datos.reduce((acum, n) => acum + n) / this.datos.length).toFixed(2));
  }

  //Ejercicio 6
  public aplicarPorcentaje(precios: number[], porcentaje: number): void{
    console.log(precios.map(p => p*(1-porcentaje/100)));
  }

  //Ejercicio 7 
  public modaNotas(): void{
    const todasLasNotas = this.alumnos.flatMap(a => [a.nota1,a.nota2,a.nota3]);

  }

  public mediaEstudiantes(): void{
    console.log(this.alumnos.reduce((acum, al) => acum + al.notaMedia,0 / this.alumnos.length));
  }

  public mediaAprobados():void{
    console.log(this.alumnos.filter(a => a.notaMedia >= 5).reduce((acum, al) => acum + al.notaMedia,0 / this.alumnos.length));
  }

  public notaMayorAlumnoFecha():void{
    const notas = this.alumnos
      .filter(a => a.fechaNac.getFullYear() <= 2000)
      .map(a => a.notaMasAlta);

    console.log(Math.max(...notas));
  }

}
