import { CommonModule } from '@angular/common';
import { HtmlParser } from '@angular/compiler';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('boletin1');

  public playas: string[] = ["Chipiona", "Matalascañas", "Caleta", "Mazagon", "Bolonia"];
  public notas: number[] = [2,7,3,9,1,10,2,5,7,2,4,4,9];
  public edades: number[] = [18,14,19,19,21,56,23,45,23,10,12,58,12,70];
  public colores: string[] = ["verde", "rojo", "azul","blanco", "negro"];

  public filtrar_playas_pares(): string[]{
    /* let playas_pares: string[] = [];
    for(let i = 0; i < this.playas.length; i++){
      if(i%2 == 0){
        playas_pares.push(this.playas[i]);
      }
    }
    return playas_pares; */
    return this.playas.filter((data, idx) => idx%2 == 0);
  }

  public obtener_nota_max(): number{
    return this.notas.reduce((max, actual) => Math.max(max,actual));
    /* return this.notas.reduce((max, actual) => actual > max ? actual : max); */
    /* let nota = 0;
    for(let i = 0; i < this.notas.length; i++){
      if(nota < this.notas[i]){
        nota = this.notas[i];
      }
    }
    return nota; */
  }

  public obtener_nota_min(): number{
    return this.notas.reduce((min, actual) => Math.min(min,actual));
    /* return this.notas.reduce((min, actual) => actual < min ? actual : min); */
    /* let nota = 0;
    for(let i = 0; i < this.notas.length; i++){
      if(nota > this.notas[i]){
        nota = this.notas[i];
      }
    }
    return nota; */
  }

  public edad_media(): number{
    /* let suma_edad = 0;
    let total_edades = 0;
    for(let i = 0; i < this.edades.length; i++){
      if(this.edades[i] > 50 || this.edades[i] < 18){
        suma_edad += this.edades[i];
        total_edades++;
      }
    }
    let edad_media = suma_edad / total_edades;
    return edad_media; */
    let edadesFiltradas = this.edades.filter(edad => edad > 18 && edad < 50);
    let result: number = edadesFiltradas.reduce((acum, edad) => acum + edad / edadesFiltradas.length);
    return Number(result.toFixed(2));
  }

  public elimina_color(color: string): string[]{
    return this.colores.filter(data => data !== color);
  }

}
