import { Injectable } from '@angular/core';
import {Board} from '../models/board';
import {Column} from '../models/column';
import {Task} from '../models/task';
import {User} from '../models/user';


@Injectable({
  providedIn: 'root',
})
export class Data {

  private boards: Board[] = [];
  private users: User[] = [];
  private activeBoard: Board | null = null;

  constructor() {}
  
  getBoards(): Board[] {
    return this.boards;
  }

  getActiveBoard(): Board | null {
    return this.activeBoard;
  }

  setActiveBoard(board: Board): void {
    this.activeBoard = board;
  }

  addBoard(nombre:string, imagen:string): void {
    const nuevoId = this.boards.length + 1;
    const nuevoTablero = new Board(nuevoId, nombre, imagen);
    this.boards.push(nuevoTablero);
  }

  addColumn(boardId: number, nombre: string): boolean{
    const board = this.boards.find(b => b.id === boardId);
    if(board && board.columnas.length < 5){
      const nuevoId = board.columnas.length + 1;
      board.columnas.push(new Column(nuevoId, nombre));
      return true;
    }
    return false;
  }

  getUsers(): User[]{
    return this.users;
  }

  adduser(newUser: User): boolean{
    const exists = this.users.some(u => u.id === newUser.id || u.email === newUser.email);
    if(exists) return false;

    this.users.push(newUser);
    return true;
  }

  updateUser(updatedUser: User): void{
    const index = this.users.findIndex( u => u.id === updatedUser.id);
    if(index !== -1){
      this.users[index] = updatedUser;
    }
  }

  addTask(task: Task, columnId: number): void{
    const column = this.activeBoard?.columnas.find(c => c.id === columnId);
    if(column){
      column.tareas.push(task);
    }
  }

  deleteUser(userId: number): void{
    this.users = this.users.filter(u => u.id !== userId); 
  }
  
}
