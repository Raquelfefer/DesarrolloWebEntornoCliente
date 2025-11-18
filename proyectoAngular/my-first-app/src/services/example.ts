import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Example {
    public tabla_num(num: number): void{
      for(let i = 0; i <= 10; i++){
        console.log(i + "*" + num + "=" + num*i);
      }
    }

    public print_name(nombre: string): string[]{
      let numero: number = Math.random()*10;
      let nombres: string[] = [];
      for(let i = 0; i < numero; i++){
        nombres.push(nombre);
      }
      return nombres;
    }
}
