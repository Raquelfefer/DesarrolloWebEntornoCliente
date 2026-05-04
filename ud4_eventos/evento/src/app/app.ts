import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('evento');
}

let button = document.querySelector('.btn');
button?.addEventListener('click', function(event) {
  console.log('¡Hello!');
});
