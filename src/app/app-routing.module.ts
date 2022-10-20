import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IniciarSesionComponent} from "./iniciar-sesion/iniciar-sesion.component";
import {ListaDeTareasComponent} from "./paginas/lista-de-tareas/lista-de-tareas.component";
import {CrearTareaComponent} from "./paginas/crear-tarea/crear-tarea.component";
import { ContenedorComponent } from "./paginas/contenedor/contenedor.component";

const routes: Routes = [
  { path: 'iniciarSesion', component: IniciarSesionComponent },
  { path: '', component: ContenedorComponent, children: [
      { path: 'listaDeTareas', component: ListaDeTareasComponent },
      { path: 'crearTarea', component: CrearTareaComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
