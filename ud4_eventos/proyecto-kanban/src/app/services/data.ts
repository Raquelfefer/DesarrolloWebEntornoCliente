import { Injectable } from '@angular/core';
import { Board } from '../models/board';
import { Column } from '../models/column';
import { Task } from '../models/task';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root',
})
export class Data {
  private boards: Board[] = [];
  private users: User[] = [];
  private activeBoard: Board | null = null;

  constructor() {
    this.seedData();
  }

  /**
   * Inicializa los datos de prueba por defecto (usuarios, tableros y tareas).
   */
  private seedData(): void {
    this.users.push(new User(1, 'Raquel', 'Ferreira', 'raquel@example.com'));
    this.users.push(new User(2, 'Juan', 'Perez', 'juan@example.com'));

    this.boards = [
      new Board(1, 'Proyecto Web', 'Tablero principal del proyecto web con sus respectivas tareas', '#bbdefb', [ 
        new Column(Date.now() + 1, 'Por hacer'),
        new Column(Date.now() + 2, 'En proceso'),
        new Column(Date.now() + 3, 'Realizado')
      ]), 
    ];

 
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
  
  
  getBoards(): Board[] {
    return this.boards;
  }


  getActiveBoard(): Board | null {
    return this.activeBoard;
  }

  setActiveBoard(board: Board): void {
    this.activeBoard = board;
  }

 
  /**
   * Añade un nuevo tablero con 3 columnas por defecto ("Por hacer", "En proceso", "Realizada").
   */
  addBoard(nombre: string, descripcion: string, color: string): Board {
    const nuevoId = this.boards.length + 1;
    const columnasIniciales = [
      new Column(Date.now() + 1, 'Por hacer'),
      new Column(Date.now() + 2, 'En proceso'),
      new Column(Date.now() + 3, 'Realizada')
    ];
    
    const nuevoTablero = new Board(nuevoId, nombre, descripcion, color, columnasIniciales);
    this.boards.push(nuevoTablero);
    return nuevoTablero;
  }



  updateColumn(boardId: number, columnId: number, newNombre: string, newColor: string): void {
    const board = this.boards.find(b => b.id === boardId);
    if (board) {
      board.columnas = board.columnas.map(c => 
        c.id === columnId ? new Column(c.id, newNombre, c.tareas, newColor) : c
      );
    }
  }

 
  /**
   * Añade una columna al tablero activo si no se ha alcanzado el límite (5 columnas).
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

  deleteColumn(boardId: number, columnId: number): void {
    const board = this.boards.find(b => b.id === boardId);
    if (board) {
      // Reemplazamos el array filtrado para que Angular detecte el cambio
      board.columnas = board.columnas.filter(c => c.id !== columnId);
    }
  }


  getUsers(): User[] {

    return this.users;
  }

  
  /**
   * Registra un nuevo usuario asegurando que el ID y el Email no estén duplicados.
   */
  adduser(newUser: User): boolean {
    const exists = this.users.some(u => u.id === newUser.id || u.email === newUser.email);
    if (exists) return false;

    this.users.push(newUser);
    return true;
  }

 
  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }

 
  /**
   * Inserta una nueva tarea en la columna especificada.
   */
  addTask(task: Task, columnId: number): void {
    const column = this.activeBoard?.columnas.find(c => c.id === columnId);
    if (column) {
      column.tareas.push(task);
    }
  }

 
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

  
  deleteTask(taskId: number): void {
    this.boards.forEach(board => {
      board.columnas.forEach(col => {
        col.tareas = col.tareas.filter(t => t.id !== taskId);
      });
    });
  }

 
  deleteUser(userId: number): void {

    this.users = this.users.filter(u => u.id !== userId); 
  }
}

