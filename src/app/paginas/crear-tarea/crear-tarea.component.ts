import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RespuestaSesion, Tarea} from "../../modelo/respuesta-sesion";
import {TareasService} from "../../servicios/tareas.service";

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.scss']
})
export class CrearTareaComponent implements OnInit {
  formModel = new FormGroup({
    titulo: new FormControl('', [Validators.required]),
    contenido: new FormControl('', [Validators.required])
  })
  respuesta: RespuestaSesion | undefined;
  constructor(private tareasService: TareasService) { }

  ngOnInit(): void {
  }
  enviarDatos(){
    console.log(this.formModel.value)
    this.tareasService.crearTarea(this.formModel.value).subscribe(
      (data) => {
        console.log(data);
        this.respuesta = data;
        this.formModel.get('titulo')?.setValue('')
        this.formModel.get('contenido')?.setValue('')
      }
    )
  }
}
