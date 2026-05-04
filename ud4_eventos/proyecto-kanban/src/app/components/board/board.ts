import { Component, OnInit } from '@angular/core';
import { Data } from '../../services/data';
import { Board } from '../../models/board';
import { Task } from '../../models/task';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './board.html',
  styleUrl: './board.css',
})
export class BoardComponent implements OnInit {

  tableros: Board[] = [];
  tableroActivo: Board | null = null;
  usuarios: User[] = [];

  mostrarFormularioTarea: boolean = false;
  idColumnaDestino: number = 0;

  nuevaTarea = {
    titulo: '',
    descripcion: '',
    estimacionHoras: 0,
    usuarioId: ''
  };

  constructor(private data: Data) {}

  ngOnInit(): void {
    this.tableros = this.data.getBoards();
    this.tableroActivo = this.data.getActiveBoard();
    this.usuarios = this.data.getUsers();
  }

  seleccionarTablero(tablero: Board): void {
    this.data.setActiveBoard(tablero);
    this.tableroActivo = tablero;
  }

  crearTablero() {
    const nombre = prompt("Nombre del tablero:");
    const imagen = prompt("URL de la imagen de fondo:", "https://picsum.photos/1200/800");
    if (nombre && imagen) {
      this.data.addBoard(nombre, imagen);
    }
  }

  nuevaColumna() {
    if (this.tableroActivo) {
      const nombreCol = prompt("Nombre de la nueva columna:");
      if(nombreCol) {
        const exito = this.data.addColumn(this.tableroActivo.id, nombreCol);
        if(!exito) alert("Límite de 5 columnas alcanzado.");
      }
    }
  }

  onDragStart(event: DragEvent, taskId: number){
    event.dataTransfer?.setData("text/plain", taskId.toString());
  }

  onDragOver(event: DragEvent){
    event.preventDefault();
  }

  onDrop(event: DragEvent, columnId: number){
    event.preventDefault();
    const taskId = event.dataTransfer?.getData("text/plain");

    if(this.tableroActivo){
      let tareaEncontrada: Task | null = null;

      this.tableroActivo.columnas.forEach(col => {
        const index = col.tareas.findIndex(t => t.id === Number(taskId));
        if(index !== -1) {
          tareaEncontrada = col.tareas.splice(index, 1)[0];
        }
      });

      if(tareaEncontrada){
        const destino = this.tableroActivo.columnas.find(c => c.id === columnId);
        destino?.tareas.push(tareaEncontrada);
      }
    }
  }

  lanzarFormularioTarea(columnaId: number){
    this.idColumnaDestino = columnaId;
    this.mostrarFormularioTarea = true; 
    this.usuarios = this.data.getUsers();
  }

  guardarTarea(){
    if(this.nuevaTarea.titulo && this.nuevaTarea.descripcion){
      const usuarioAsignado = this.usuarios.find(u => u.id === Number(this.nuevaTarea.usuarioId)) || null;
      
      const tareaFinal = new Task(
        Date.now(),
        this.nuevaTarea.titulo,
        this.nuevaTarea.descripcion,
        this.nuevaTarea.estimacionHoras,
        usuarioAsignado,
        this.idColumnaDestino.toString()
      );

      this.data.addTask(tareaFinal, this.idColumnaDestino);
      this.mostrarFormularioTarea = false;
      this.resetFormulario();
    }
  }

  resetFormulario(){
    this.nuevaTarea = {
      titulo: '',
      descripcion: '',
      estimacionHoras: 0,
      usuarioId: ''
    };
  }





}
