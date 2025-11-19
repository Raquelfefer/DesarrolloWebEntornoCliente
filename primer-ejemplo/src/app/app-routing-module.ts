import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { Services } from '../components/services/services';
import { Contacto } from '../components/contacto/contacto';

const routes: Routes = [
  {path: "", redirectTo:"/home", pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'services', component: Services},
  {path: 'contacto', component: Contacto}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
