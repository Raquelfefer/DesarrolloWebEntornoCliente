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

  /**
   * Modelo para el formulario (Databinding bidireccional)
   * Requisito: El control (databinding) de los datos se encuentra en los componentes (TS)
   */
  usuarioActual: User = new User(0, '', '', '');

  constructor(private dataService: Data) {}

  ngOnInit(): void {
    this.usuarios = this.dataService.getUsers();
  }

  /**
   * Gestiona el registro o actualización de un usuario.
   * Requisito: El email del usuario será un campo único (sin duplicidades).
   */
  gestionarEnvio() {
    if (this.isEditing) {
      this.dataService.updateUser(this.usuarioActual);
      this.isEditing = false;
    } else {
      // Validar duplicidad antes de añadir
      // Requisito: Lógica de negocio en servicios (adduser ya lo comprueba, pero aquí damos feedback)
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
   * Elimina un usuario del sistema.
   */
  borrarUsuario(id: number): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.dataService.deleteUser(id);
      this.usuarios = this.dataService.getUsers();
    }
  }

  /**
   * Carga los datos del usuario seleccionado en el formulario para editar.
   */
  prepararEdicion(u: User) {
    this.isEditing = true;
    // Creamos una copia para no modificar la lista directamente hasta guardar
    this.usuarioActual = { ...u };
  }

  resetFormulario() {
    this.usuarioActual = new User(0, '', '', '');
    this.isEditing = false;
  }
}

