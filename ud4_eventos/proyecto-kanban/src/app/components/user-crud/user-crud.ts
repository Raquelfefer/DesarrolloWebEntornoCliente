import { Component, OnInit } from '@angular/core';
import {Data} from '../../services/data';
import {User} from '../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-crud',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-crud.html',
  styleUrl: './user-crud.css',
})
export class UserCrud implements OnInit{
  usuarios: User[] = [];
  isEditing: boolean = false;
  
  constructor(private dataService: Data) {}

  ngOnInit(): void {
    this.usuarios = this.dataService.getUsers();
  }

  gestionarEnvio(event: Event){
    event.preventDefault(); // Evitamos recarga de página (Buenas prácticas SPA)

    const form = event.target as HTMLFormElement;
    const id = Number((form.elements.namedItem('idUsuario') as HTMLInputElement).value);
    const nombre = (form.elements.namedItem('nombreUsuario') as HTMLInputElement).value;
    const apellidos = (form.elements.namedItem('apellidosUsuario') as HTMLInputElement).value;
    const email = (form.elements.namedItem('emailUsuario') as HTMLInputElement).value;  

    const usuarioProcesado = new User(id, nombre, apellidos, email);

    if(this.isEditing){
      this.dataService.updateUser(usuarioProcesado);
      this.isEditing = false;
      (form.elements.namedItem('idUsuario') as HTMLInputElement).disabled = false;
    }else{
      const duplicado = this.usuarios.some(u => u.id === id || u.email === email);
      if(duplicado){
        alert('Error: El ID o el Email ya están registrados.');
        return;
      }
      this.dataService.adduser(usuarioProcesado);
    }
    this.usuarios = this.dataService.getUsers();
    form.reset();
  }

  borrarUsuario(id: number): void{
    this.dataService.deleteUser(id);
    this.usuarios = this.dataService.getUsers();
  }

  prepararEdicion(u: User){
    this.isEditing = true;

    const form = document.querySelector('.user-form') as HTMLFormElement;
    (form.elements.namedItem('idUsuario') as HTMLInputElement).value = u.id.toString();
    (form.elements.namedItem('emailUsuario') as HTMLInputElement).value = u.email;
    (form.elements.namedItem('nombreUsuario') as HTMLInputElement).value = u.nombre;
    (form.elements.namedItem('apellidosUsuario') as HTMLInputElement).value = u.apellidos;
    
    (form.elements.namedItem('idUsuario') as HTMLInputElement).disabled = true;
  }


}
