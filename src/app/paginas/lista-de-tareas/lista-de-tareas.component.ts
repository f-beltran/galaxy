import { Component, OnInit } from '@angular/core';
import {TareasService} from "../../servicios/tareas.service";
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {Tarea} from "../../modelo/respuesta-sesion";

@Component({
  selector: 'app-lista-de-tareas',
  templateUrl: './lista-de-tareas.component.html',
  styleUrls: ['./lista-de-tareas.component.scss']
})
export class ListaDeTareasComponent implements OnInit {

  pendientes: Tarea[] = [];
  hechos: Tarea[] = [];


  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
    this.obtenerTareas()
  }

  obtenerTareas(){
    this.tareasService.obtenerTareas().subscribe(
      data => {
        console.log('Estas son las tareas pendientes', data);
        this.pendientes = data.datos.pendientes
        this.hechos = data.datos.hechos
      }
    )
  }
  drop(event: CdkDragDrop<Tarea[]>) {

    // SI ES EL MISMO CONTENEDOR
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // SI SON CONTENEDORES DIFERENTES
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );

      setTimeout( () => {
        // console.log('7////', event.container.data.at(event.currentIndex)?.id )
        this.tareasService.cambiarEstado({id: event.container.data.at(event.currentIndex)?.id}).subscribe(
          data => console.log(data)
        )
      }, 500)

    }
  }
  eliminar(id: any){
    console.log('Eliminar item: ', id)
    this.tareasService.eliminarTarea({id: id}).subscribe(
      data => {
        console.log(data)
        this.pendientes = [];
        this.hechos = [];
        this.obtenerTareas()
      }
    )
  }

}
