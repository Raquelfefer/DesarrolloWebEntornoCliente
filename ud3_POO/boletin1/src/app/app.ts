import { CommonModule } from '@angular/common';
import { HtmlParser } from '@angular/compiler';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('boletin1');

  public playas: string[] = ["Chipiona", "Matalascañas", "Caleta", "Mazagon", "Bolonia"];
  public notas: number[] = [2,7,3,9,1,10,2,5,7,2,4,4,9];
  public edades: number[] = [18,14,19,19,21,56,23,45,23,10,12,58,12,70];
  public colores: string[] = ["verde", "rojo", "azul","blanco", "negro"];
  public frutas: string[] = ["Aguacate", "Banana", "Chirimoya", "Dátil", "Fresa", "Guayaba", "Kiwi", "Limón", "Naranja", "Pera", "Sandía", "Uva", "Yuca"];
  public fruta:string = "";
  public matriz1: number[][] = this.inicializa_matriz();
  public matriz2: number[][] = this.inicializa_matriz();
  
  /* Ejercicio 1 */
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

  /* Ejercicio 2 */
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

  /* Ejercicio 3 */
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

  /* Ejercicio 4 */
  public elimina_color(color: string): string[]{
    return this.colores.filter(data => data !== color);
  }

  /* Elimina el primer elemento del array. No devuelve nada o en todo caso devolver el elemento eliminado */
  public elimina_color2(color: string): void{
    this.colores.splice(this.colores.indexOf(color),1);
  }

  /* Ejercicio 5 */

  /* Forma usando el localeCompare */
  /* public introducir_fruta(fruta: string){
    let indice = this.frutas.length;
    for(let i = 0; i < this.frutas.length; i++){
      if(fruta.localeCompare(this.frutas[i]) < 0){
        indice = i;
        break;
      }
    }
    this.frutas.splice(indice, 0, fruta);
  } */

  public introducir_fruta(): void{
    let encontrado = this.frutas.length;
    for(let i = 0; i < this.frutas.length; i++){
      if(this.fruta < this.frutas[i]){
        encontrado = i;
        break;
      }
    }
    this.frutas.splice(encontrado, 0, this.fruta);
  }

  /* Ejercicio 7 */
  private inicializa_matriz(): number[][]{
    let result : number[][] = [];
    
    for(let i = 0; i < 3; i++){
      let fila: number[] = [];
      for(let j = 0; j < 3; j++){
        fila.push(0);
      }
      result.push(fila);
    }
    
    this.imprime_matriz(result);
    return result;
  }

  private imprime_matriz(matriz: number[][]){
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        console.log(matriz);
      }
    }
  }
} 
