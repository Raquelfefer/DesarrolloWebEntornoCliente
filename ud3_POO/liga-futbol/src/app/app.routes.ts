import { Routes } from '@angular/router';
import { DetalleEquipo } from './pages/detalle-equipo/detalle-equipo';
import { Inicio } from './pages/inicio/inicio';

export const routes: Routes = [
    {path: "", component: Inicio},
    {path: "equipo/:id", component: DetalleEquipo},
    {path: "**", redirectTo: ""}
];
