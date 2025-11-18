import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Example } from '../services/example';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Raquel');
  protected nombres: string[] = [];

  constructor(private servicioExample: Example) {}

  ngOnInit():void{
    this.servicioExample.tabla_num(9);
    this.nombres = this.servicioExample.print_name("Raquel");
  }

}
