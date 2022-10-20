import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {HttpClientModule} from "@angular/common/http";
import { ListaDeTareasComponent } from './paginas/lista-de-tareas/lista-de-tareas.component';
import {httpInterceptorProviders} from "./interceptores";
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CrearTareaComponent } from './paginas/crear-tarea/crear-tarea.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { ContenedorComponent } from './paginas/contenedor/contenedor.component';



@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    ListaDeTareasComponent,
    CrearTareaComponent,
    ContenedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    DragDropModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
