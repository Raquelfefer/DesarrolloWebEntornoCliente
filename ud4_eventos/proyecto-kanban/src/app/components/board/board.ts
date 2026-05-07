import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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


  idTareaEnMovimiento: number | null = null;

  mostrarFormularioTarea: boolean = false;
  isEditingTarea: boolean = false;
  idTareaEdicion: number | null = null;
  mostrarFormularioTablero: boolean = false;
  mostrarFormularioColumna: boolean = false;
  isEditingColumna: boolean = false;
  idColumnaEdicion: number | null = null;
  mostrarMensajeLimite: boolean = false;

  idColumnaDestino: number = 0;

  nuevaTarea = {
    titulo: '',
    descripcion: '',
    estimacionHoras: 0,
    usuarioId: 0
  };

  nuevoTablero = {
    nombre: '',
    descripcion: '',
    color: '#ebecf0'
  };


  nuevaColumnaNombre: string = '';
  nuevaColumnaColor: string = '#ebecf0';

  coloresPastel: string[] = [
    '#ebecf0', 
    '#ffecb3', 
    '#c8e6c9', 
    '#bbdefb', 
    '#f8bbd0', 
    '#e1bee7', 
    '#ffe0b2'  
  ];

  constructor(private data: Data, private cdr: ChangeDetectorRef) {}





  ngOnInit(): void {
    this.tableros = this.data.getBoards();
    this.tableroActivo = this.data.getActiveBoard();
    this.usuarios = this.data.getUsers();
  }

  
  /**
   * Establece un tablero como activo para mostrar sus columnas y tareas.
   */
  seleccionarTablero(tablero: Board): void {
    this.data.setActiveBoard(tablero);
    this.tableroActivo = tablero;
  }

  
  lanzarFormularioTablero() {
    this.mostrarFormularioTablero = true;
  }

 
  /**
   * Guarda un nuevo tablero introducido desde el formulario y limpia los datos.
   */
  guardarTablero() {
    if (this.nuevoTablero.nombre && this.nuevoTablero.color) {
      const nuevo = this.data.addBoard(this.nuevoTablero.nombre, this.nuevoTablero.descripcion, this.nuevoTablero.color);
      this.tableros = this.data.getBoards();
      this.seleccionarTablero(nuevo);
      this.mostrarFormularioTablero = false;
      this.nuevoTablero = { nombre: '', descripcion: '', color: '#ebecf0' };
    }
  }

  
  lanzarFormularioColumna() {
    if (this.tableroActivo && this.tableroActivo.columnas.length >= 5) {
      this.mostrarMensajeLimite = true;
      setTimeout(() => this.mostrarMensajeLimite = false, 3000); // Se oculta tras 3 segundos
      return;
    }
    this.isEditingColumna = false;
    this.idColumnaEdicion = null;
    this.nuevaColumnaNombre = '';
    this.mostrarFormularioColumna = true;
  }



  prepararEdicionColumna(col: any) {
    this.isEditingColumna = true;
    this.idColumnaEdicion = col.id;
    this.nuevaColumnaNombre = col.nombre;
    this.nuevaColumnaColor = col.color || '#ebecf0';
    this.mostrarFormularioColumna = true;
  }


  guardarColumna() {
    if (this.tableroActivo && this.nuevaColumnaNombre) {
      if (this.isEditingColumna && this.idColumnaEdicion) {
        this.data.updateColumn(this.tableroActivo.id, this.idColumnaEdicion, this.nuevaColumnaNombre, this.nuevaColumnaColor);
      } else {
        const exito = this.data.addColumn(this.tableroActivo.id, this.nuevaColumnaNombre, this.nuevaColumnaColor);
        if (!exito) {
          alert("Límite de 5 columnas alcanzado.");
        }
      }
      this.mostrarFormularioColumna = false;
      this.nuevaColumnaNombre = '';
      this.nuevaColumnaColor = '#ebecf0';
    }
  }


  borrarColumna(columnId: number) {
    if (this.tableroActivo && confirm('¿Estás seguro de eliminar esta columna y todas sus tareas?')) {
      this.data.deleteColumn(this.tableroActivo.id, columnId);
      this.cdr.detectChanges();
    }
  }

  borrarTarea(taskId: number) {
    if (confirm('¿Estás seguro de eliminar esta tarea?')) {
      this.data.deleteTask(taskId);
      this.cdr.detectChanges();
    }
  }

  /**
   * Inicia el proceso de Drag & Drop guardando el ID de la tarea.
   */
  onDragStart(event: DragEvent, taskId: number){
    this.idTareaEnMovimiento = taskId;
    event.dataTransfer?.setData("text/plain", taskId.toString());
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
    }
  }

  onDragOver(event: DragEvent){
    event.preventDefault(); 
  }

  /**
   * Evento que se ejecuta al soltar una tarea sobre una columna. Extrae la tarea origen y la inserta.
   */
  onDrop(event: DragEvent, columnId: number){
    event.preventDefault();
    const taskId = event.dataTransfer?.getData("text/plain");

    if(this.tableroActivo && taskId){
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
    this.idTareaEnMovimiento = null;
  }


  onDragEnd() {
    this.idTareaEnMovimiento = null;
  }

  lanzarFormularioTarea(columnaId?: number){
    this.isEditingTarea = false;
    this.idTareaEdicion = null;
    this.resetFormulario();

    if (columnaId) {
      this.idColumnaDestino = columnaId;
    } else if (this.tableroActivo && this.tableroActivo.columnas.length > 0) {
      this.idColumnaDestino = this.tableroActivo.columnas[0].id;
    }
    this.mostrarFormularioTarea = true; 
    this.usuarios = this.data.getUsers();
  }

  prepararEdicionTarea(task: Task) {
    this.isEditingTarea = true;
    this.idTareaEdicion = task.id;
    this.nuevaTarea = {
      titulo: task.titulo,
      descripcion: task.descripcion,
      estimacionHoras: task.estimacionHoras,
      usuarioId: task.usuario?.id || 0
    };
    this.mostrarFormularioTarea = true;
  }

 
  /**
   * Registra una nueva tarea o guarda los cambios si se está editando una existente.
   */
  guardarTarea(){
    if(this.nuevaTarea.titulo && this.nuevaTarea.descripcion){
      const usuarioAsignado = this.usuarios.find(u => u.id === Number(this.nuevaTarea.usuarioId)) || null;
      
      if (this.isEditingTarea && this.idTareaEdicion) {
        const tareaEditada = new Task(
          this.idTareaEdicion,
          this.nuevaTarea.titulo,
          this.nuevaTarea.descripcion,
          this.nuevaTarea.estimacionHoras,
          usuarioAsignado,
          '' 
        );
        this.data.updateTask(tareaEditada);
      } else {
        const tareaFinal = new Task(
          Date.now(),
          this.nuevaTarea.titulo,
          this.nuevaTarea.descripcion,
          this.nuevaTarea.estimacionHoras,
          usuarioAsignado,
          this.idColumnaDestino.toString()
        );
        this.data.addTask(tareaFinal, this.idColumnaDestino);
      }

      this.mostrarFormularioTarea = false;
      this.resetFormulario();
    }
  }

  resetFormulario(){
    this.nuevaTarea = {
      titulo: '',
      descripcion: '',
      estimacionHoras: 0,
      usuarioId: 0
    };
  }

}
