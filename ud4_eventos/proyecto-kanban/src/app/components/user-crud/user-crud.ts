import { Component, OnInit } from '@angular/core';
import { Data } from '../../services/data';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-crud.html',
  styleUrl: './user-crud.css',
})
export class UserCrud implements OnInit {
  usuarios: User[] = [];
  isEditing: boolean = false;

  
  usuarioActual: User = new User(0, '', '', '');

  constructor(private dataService: Data) {}

  ngOnInit(): void {
    this.usuarios = this.dataService.getUsers();
  }

  
  /**
   * Crea o actualiza un usuario en función del estado del componente.
   */
  gestionarEnvio(event?: Event) {
    if (event) {
      event.preventDefault(); // Prevenimos el comportamiento por defecto del formulario
    }

    if (this.isEditing) {
      this.dataService.updateUser(this.usuarioActual);
      this.isEditing = false;
    } else {
      const exito = this.dataService.adduser(
        new User(
          this.usuarioActual.id,
          this.usuarioActual.nombre,
          this.usuarioActual.apellidos,
          this.usuarioActual.email
        )
      );

      if (!exito) {
        alert('Error: El ID o el Email ya están registrados (deben ser únicos).');
        return;
      }
    }
    this.usuarios = this.dataService.getUsers();
    this.resetFormulario();
  }

  
  /**
   * Elimina un usuario solicitando confirmación previa.
   */
  borrarUsuario(id: number): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.dataService.deleteUser(id);
      this.usuarios = this.dataService.getUsers();
    }
  }

  
  prepararEdicion(u: User) {
    this.isEditing = true;
    this.usuarioActual = { ...u };
  }

  resetFormulario() {
    this.usuarioActual = new User(0, '', '', '');
    this.isEditing = false;
  }
}

