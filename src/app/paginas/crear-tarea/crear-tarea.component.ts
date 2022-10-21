import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";
import {RespuestaSesion} from "../../modelo/respuesta-sesion";
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
  constructor(private tareasService: TareasService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  mensajeSimple(
    mensaje: string,
    accion: string,
    posHorizontal: string,
    posVertical: string,
    tipo: string,
    duration: number
  ) {
    const snackBarRef =  this._snackBar.open(mensaje, accion, {
      horizontalPosition: <MatSnackBarHorizontalPosition>posHorizontal,
      verticalPosition: <MatSnackBarVerticalPosition >posVertical,
      panelClass: [tipo + '-snackbar'],
      duration: duration
    })
    snackBarRef.afterDismissed().subscribe(
      data => console.log('Anuncio cerrado:', data)
    )
  }


  enviarDatos(){
    console.log(this.formModel.value)
    this.tareasService.crearTarea(this.formModel.value).subscribe(
      (data: RespuestaSesion) => {
        console.log(data);
        this.respuesta = data;
        this.formModel.get('titulo')?.setValue('');
        this.formModel.get('contenido')?.setValue('');
        this.mensajeSimple(
          data.mensajes[0].descripcion,
          '',
          'center',
          'bottom',
          data.mensajes[0].tipo,
          106000
        )
      }
    )
  }
}
