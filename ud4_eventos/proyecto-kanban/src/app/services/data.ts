import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { Column } from '../models/column';
import { Task } from '../models/task';
import { User } from '../models/user';

/**
 * Servicio centralizado para la gestión de datos de la aplicación Kanban.
 * Requisito: La lógica de negocio está en los servicios.
 */
@Injectable({
  providedIn: 'root',
})
export class Data {
  /** Lista maestra de tableros */
  private boards: Board[] = [];
  /** Lista maestra de usuarios */
  private users: User[] = [];
  /** Tablero que se está visualizando actualmente */
  private activeBoard: Board | null = null;

  constructor() {
    this.seedData();
  }

  /**
   * Inicializa la aplicación con datos de prueba.
   */
  private seedData(): void {
    // Usuarios iniciales
    this.users.push(new User(1, 'Raquel', 'Ferreira', 'raquel@example.com'));
    this.users.push(new User(2, 'Juan', 'Perez', 'juan@example.com'));

    // Tablero inicial con 3 columnas por defecto (Requisito 4.5 pts)
    this.boards = [
      new Board(1, 'Proyecto Web', '#bbdefb', [ // Azul claro
        new Column(Date.now() + 1, 'Por hacer'),
        new Column(Date.now() + 2, 'En proceso'),
        new Column(Date.now() + 3, 'Realizado')
      ]),
      new Board(2, 'Marketing', '#f8bbd0'), // Rosa claro
      new Board(3, 'Recursos Humanos', '#c8e6c9') // Verde claro
    ];

    
    // Tarea de ejemplo creada en la primera columna ("Por hacer")
    this.boards[0].columnas[0].tareas.push(new Task(
      Date.now(), 
      'Estudiar Eventos JS', 
      'Repasar preventDefault y Drag & Drop', 
      5, 
      this.users[0], 
      '1'
    ));

    this.activeBoard = this.boards[0];
  }
  
  /**
   * Obtiene todos los tableros disponibles.
   */
  getBoards(): Board[] {
    return this.boards;
  }

  /**
   * Obtiene el tablero activo actualmente.
   */
  getActiveBoard(): Board | null {
    return this.activeBoard;
  }

  /**
   * Establece el tablero activo.
   */
  setActiveBoard(board: Board): void {
    this.activeBoard = board;
  }

  /**
   * Añade un nuevo tablero al sistema con columnas predeterminadas.
   */
  addBoard(nombre: string, color: string): Board {
    const nuevoId = this.boards.length + 1;
    const columnasIniciales = [
      new Column(Date.now() + 1, 'Por hacer'),
      new Column(Date.now() + 2, 'En proceso'),
      new Column(Date.now() + 3, 'Realizada')
    ];
    
    const nuevoTablero = new Board(nuevoId, nombre, color, columnasIniciales);
    this.boards.push(nuevoTablero);
    return nuevoTablero;
  }




  /**
   * Actualiza una columna (nombre y color).
   */
  updateColumn(boardId: number, columnId: number, newNombre: string, newColor: string): void {
    const board = this.boards.find(b => b.id === boardId);
    if (board) {
      // Reemplazamos la columna para cambiar la referencia
      board.columnas = board.columnas.map(c => 
        c.id === columnId ? new Column(c.id, newNombre, c.tareas, newColor) : c
      );
    }
  }

  /**
   * Añade una columna a un tablero específico validando el límite.
   * Requisito: Validación del límite de columnas a 5.
   */
  addColumn(boardId: number, nombre: string, color: string = '#ebecf0'): boolean {
    const board = this.boards.find(b => b.id === boardId);
    if (board && board.columnas.length < 5) {
      const nuevoId = Date.now() + Math.floor(Math.random() * 1000);
      // Reemplazamos el array completo para que Angular detecte el cambio
      board.columnas = [...board.columnas, new Column(nuevoId, nombre, [], color)];
      return true;
    }
    return false;
  }

  /**
   * Elimina una columna de un tablero.
   */
  deleteColumn(boardId: number, columnId: number): void {
    const board = this.boards.find(b => b.id === boardId);
    if (board) {
      // Reemplazamos el array filtrado para que Angular detecte el cambio
      board.columnas = board.columnas.filter(c => c.id !== columnId);
    }
  }


  /**
   * Obtiene la lista de usuarios.
   */
  getUsers(): User[] {

    return this.users;
  }

  /**
   * Registra un nuevo usuario validando unicidad de ID y Email.
   * Requisito: El email del usuario será un campo único (sin duplicidades).
   */
  adduser(newUser: User): boolean {
    const exists = this.users.some(u => u.id === newUser.id || u.email === newUser.email);
    if (exists) return false;

    this.users.push(newUser);
    return true;
  }

  /**
   * Actualiza los datos de un usuario existente.
   */
  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

  /**
   * Añade una tarea a una columna específica.
   */
  addTask(task: Task, columnId: number): void {
    const column = this.activeBoard?.columnas.find(c => c.id === columnId);
    if (column) {
      column.tareas.push(task);
    }
  }

  /**
   * Actualiza una tarea existente buscando por ID.
   */
  updateTask(updatedTask: Task): void {
    this.boards.forEach(board => {
      board.columnas.forEach(col => {
        const index = col.tareas.findIndex(t => t.id === updatedTask.id);
        if (index !== -1) {
          col.tareas[index] = updatedTask;
        }
      });
    });
  }

  /**
   * Elimina una tarea del sistema buscando en todos los tableros y columnas.
   */
  deleteTask(taskId: number): void {
    this.boards.forEach(board => {
      board.columnas.forEach(col => {
        col.tareas = col.tareas.filter(t => t.id !== taskId);
      });
    });
  }

  /**
   * Elimina un usuario por su ID.
   */
  deleteUser(userId: number): void {

    this.users = this.users.filter(u => u.id !== userId); 
  }
}

