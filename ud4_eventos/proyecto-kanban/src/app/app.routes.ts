import { Routes } from '@angular/router';
import { BoardComponent } from './components/board/board';
import { UserCrud } from './components/user-crud/user-crud';

export const routes: Routes = [
  { path: 'board', component: BoardComponent },       
  { path: 'usuarios', component: UserCrud }, 
  { path: '', redirectTo: 'board', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'board' }                  
];