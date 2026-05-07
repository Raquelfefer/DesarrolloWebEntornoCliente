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

  /**
   * Identificador de la tarea que se está moviendo actualmente.
   * Requisito: El evento dragEnd "libera" la tarea marcada como "en movimiento".
   */
  idTareaEnMovimiento: number | null = null;

  /** Control del modal de creación de tareas */
  mostrarFormularioTarea: boolean = false;
  /** Indica si estamos editando una tarea existente */
  isEditingTarea: boolean = false;
  /** ID de la tarea que se está editando */
  idTareaEdicion: number | null = null;
  /** Control del modal de creación de tableros */
  mostrarFormularioTablero: boolean = false;
  /** Control del modal de creación de columnas */
  mostrarFormularioColumna: boolean = false;
  /** Indica si estamos editando una columna existente */
  isEditingColumna: boolean = false;
  /** ID de la columna que se está editando */
  idColumnaEdicion: number | null = null;
  /** Control para mostrar el mensaje de error de límite de columnas */
  mostrarMensajeLimite: boolean = false;


  /** Columna donde se insertará la nueva tarea */
  idColumnaDestino: number = 0;

  /** Modelo para la nueva tarea (Databinding) */
  nuevaTarea = {
    titulo: '',
    descripcion: '',
    estimacionHoras: 0,
    usuarioId: 0
  };


  /** Modelo para el nuevo tablero (Databinding) */
  nuevoTablero = {
    nombre: '',
    color: '#ebecf0'
  };


  /** Modelo para la nueva columna (Databinding) */
  nuevaColumnaNombre: string = '';
  nuevaColumnaColor: string = '#ebecf0';

  /** Paleta de colores pastel */
  coloresPastel: string[] = [
    '#ebecf0', // Gris suave
    '#ffecb3', // Ambar claro
    '#c8e6c9', // Verde claro
    '#bbdefb', // Azul claro
    '#f8bbd0', // Rosa claro
    '#e1bee7', // Violeta claro
    '#ffe0b2'  // Naranja claro
  ];

  constructor(private data: Data, private cdr: ChangeDetectorRef) {}





  ngOnInit(): void {
    this.tableros = this.data.getBoards();
    this.tableroActivo = this.data.getActiveBoard();
    this.usuarios = this.data.getUsers();
  }

  /**
   * Cambia el tablero activo y actualiza la vista.
   */
  seleccionarTablero(tablero: Board): void {
    this.data.setActiveBoard(tablero);
    this.tableroActivo = tablero;
  }

  /**
   * Abre el modal para crear un nuevo tablero.
   */
  lanzarFormularioTablero() {
    this.mostrarFormularioTablero = true;
  }

  /**
   * Persiste el nuevo tablero y lo selecciona.
   */
  guardarTablero() {
    if (this.nuevoTablero.nombre && this.nuevoTablero.color) {
      const nuevo = this.data.addBoard(this.nuevoTablero.nombre, this.nuevoTablero.color);
      this.tableros = this.data.getBoards();
      this.seleccionarTablero(nuevo);
      this.mostrarFormularioTablero = false;
      this.nuevoTablero = { nombre: '', color: '#ebecf0' };
    }
  }




  /**
   * Abre el modal para añadir una nueva columna.
   */
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



  /**
   * Carga los datos de una columna para editarla.
   */
  prepararEdicionColumna(col: any) {
    this.isEditingColumna = true;
    this.idColumnaEdicion = col.id;
    this.nuevaColumnaNombre = col.nombre;
    this.nuevaColumnaColor = col.color || '#ebecf0';
    this.mostrarFormularioColumna = true;
  }


  /**
   * Persiste la nueva columna o actualiza una existente.
   * Requisito: Validación del límite de columnas a 5.
   */
  guardarColumna() {
    if (this.tableroActivo && this.nuevaColumnaNombre) {
      if (this.isEditingColumna && this.idColumnaEdicion) {
        // Modo edición
        this.data.updateColumn(this.tableroActivo.id, this.idColumnaEdicion, this.nuevaColumnaNombre, this.nuevaColumnaColor);
      } else {
        // Modo creación
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



  /**
   * Elimina una columna tras confirmar con el usuario.
   */
  borrarColumna(columnId: number) {
    if (this.tableroActivo && confirm('¿Estás seguro de eliminar esta columna y todas sus tareas?')) {
      this.data.deleteColumn(this.tableroActivo.id, columnId);
      this.cdr.detectChanges();
    }
  }

  /**
   * Elimina una tarea tras confirmar con el usuario.
   */
  borrarTarea(taskId: number) {
    if (confirm('¿Estás seguro de eliminar esta tarea?')) {
      this.data.deleteTask(taskId);
      this.cdr.detectChanges();
    }
  }


  /**
   * Evento al iniciar el arrastre de una tarea.
   * Requisito: El evento dragStart está correctamente asociado a cada tarea.
   */
  onDragStart(event: DragEvent, taskId: number){
    this.idTareaEnMovimiento = taskId;
    event.dataTransfer?.setData("text/plain", taskId.toString());
    // Efecto visual opcional en el dataTransfer
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = "move";
    }
  }

  /**
   * Evento cuando una tarea se arrastra sobre una columna.
   * Requisito: El evento dragOver está correctamente asociado (preventDefault).
   */
  onDragOver(event: DragEvent){
    event.preventDefault(); // Permitir el drop
  }

  /**
   * Evento al soltar una tarea en una columna destino.
   * Requisito: El evento drop está correctamente asociado a cada columna destino.
   */
  onDrop(event: DragEvent, columnId: number){
    event.preventDefault();
    const taskId = event.dataTransfer?.getData("text/plain");

    if(this.tableroActivo && taskId){
      let tareaEncontrada: Task | null = null;

      // Buscar y extraer la tarea de su columna original
      this.tableroActivo.columnas.forEach(col => {
        const index = col.tareas.findIndex(t => t.id === Number(taskId));
        if(index !== -1) {
          tareaEncontrada = col.tareas.splice(index, 1)[0];
        }
      });

      // Insertar la tarea en la nueva columna
      if(tareaEncontrada){
        const destino = this.tableroActivo.columnas.find(c => c.id === columnId);
        destino?.tareas.push(tareaEncontrada);
      }
    }
    this.idTareaEnMovimiento = null; // Limpiar estado para evitar que se quede en gris
  }


  /**
   * Evento al finalizar el arrastre (haya tenido éxito o no).
   * Requisito: El evento dragEnd "libera" la tarea marcada como "en movimiento".
   */
  onDragEnd() {
    this.idTareaEnMovimiento = null;
  }

  /**
   * Abre el modal para crear una nueva tarea.
   * Requisito: Por defecto se crean en la primera columna ("Por hacer").
   */
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

  /**
   * Carga los datos de una tarea para editarla.
   */
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
   * Persiste la tarea (creación o edición) en el servicio.
   */
  guardarTarea(){
    if(this.nuevaTarea.titulo && this.nuevaTarea.descripcion){
      const usuarioAsignado = this.usuarios.find(u => u.id === Number(this.nuevaTarea.usuarioId)) || null;
      
      if (this.isEditingTarea && this.idTareaEdicion) {
        // Modo edición
        const tareaEditada = new Task(
          this.idTareaEdicion,
          this.nuevaTarea.titulo,
          this.nuevaTarea.descripcion,
          this.nuevaTarea.estimacionHoras,
          usuarioAsignado,
          '' // El ID de columna no cambia aquí
        );
        this.data.updateTask(tareaEditada);
      } else {
        // Modo creación
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
