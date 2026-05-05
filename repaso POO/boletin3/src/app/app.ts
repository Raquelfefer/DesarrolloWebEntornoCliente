import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Alumno } from './models/alumno';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  protected readonly title = signal('boletin3');

  public datos: number[] = [1,7,8,3,4,9];
  public nombres: string[] = ['Maria', 'Amanda','Paco','Pedro','Amelia'];
  public alumnos: Alumno[] = [];

  ngOnInit(): void {
      const alumno1:Alumno = new Alumno('Maria','Perez Perez',new Date('2002-12-12'),5,6,8);
      const alumno2:Alumno = new Alumno('Pepe','Palomares Gijo',new Date('1991-04-04'),4,9,6);
      const alumno3:Alumno = new Alumno('Raul','Lopez Blanco',new Date('2014-10-10'),2,5,8);
      this.alumnos.push(alumno1, alumno2, alumno3);
    }

  public arrayDoble(): void{
    console.log(this.datos.map(a => a*2));
  }

  public mayoresCinco(): void{
    console.log(this.datos.filter(n => n >= 5));
  }

  public arrayOrdenado(flag: boolean): void{
    let arrayOrdenado: number[] = [...this.datos];
    if(flag){
      arrayOrdenado = arrayOrdenado.sort((a,b) => a - b);
    }else{
      arrayOrdenado = arrayOrdenado.sort((a,b) => b - a);
    }

    console.log(arrayOrdenado);
  }

  public nombresMayuscula(): void{
    const nombresMayuscula = this.nombres.map(a => a.toUpperCase())
                              .filter(a => a.charAt(0) === 'A');
    console.log(nombresMayuscula);                                 
  }

  public media(): void{
    const cantidad = this.datos.length;
    const media = this.datos.reduce((aa, a) => aa + a, 0)/cantidad;
    console.log(Math.trunc(media));
  }

  public porcentaje(porcentaje: number): void{
    const precios = this.datos.map(a => a - ((porcentaje/100) * a));
    console.log(precios);
  }

  public moda(): void{
    const todasLasNotas: number[] = this.alumnos.flatMap(a => [a.nota1, a.nota2, a.nota3]);
    if (todasLasNotas.length === 0) return;

    // 2. Contar frecuencias (Frecuencia Absoluta)
    const frecuencias = todasLasNotas.reduce((acc, nota) => {
      acc[nota] = (acc[nota] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

    // 3. Buscar la frecuencia más alta
    const maxFrecuencia = Math.max(...Object.values(frecuencias));

    // 4. Identificar qué nota(s) tienen esa frecuencia
    const modas = Object.keys(frecuencias)
      .filter(nota => frecuencias[Number(nota)] === maxFrecuencia)
      .map(Number);

    console.log("Historial de todas las notas:", todasLasNotas);
    console.log("La nota que más se repite (Moda):", modas);
  }

  public notaMedia(): void{
    const todasLasNotas: number[] = this.alumnos.flatMap(a => [a.nota1, a.nota2, a.nota3]);
    const notaTotal: number = todasLasNotas.reduce((bb, b) => bb + b, 0);
    const numeroNotas: number = todasLasNotas.length;
    console.log(notaTotal/numeroNotas);
  }

  public notaMediaAprobados(): void{
    const todasLasNotas: number[] = this.alumnos.flatMap(a => [a.nota1, a.nota2, a.nota3])
                                    .filter(a => a >= 5);
    const notaTotal: number = todasLasNotas.reduce((bb, b) => bb + b, 0);
    const numeroNotas: number = todasLasNotas.length;
    console.log(notaTotal/numeroNotas);
  }

  public notaNac(): void{
    const notaNac: number = this.alumnos.filter(a => a.fecha_nac.getFullYear() < 2000)
                                  .flatMap(a => [a.nota1, a.nota2, a.nota3])
                                  .reduce((max, m) => m > max ? m : max);
    /* const notaMax: number = Math.max(...notaNac) - En vez del reduce*/
    console.log(notaNac);
  }

}
