import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SesionService} from "../servicios/sesion.service";
import {RespuestaSesion} from "../modelo/respuesta-sesion";
import {Router} from "@angular/router";

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent implements OnInit {
  respuestaSesion: RespuestaSesion | undefined;
  formModel = new  FormGroup({
    login: new FormControl('', [Validators.required]),
    clave: new FormControl('', [Validators.required])
  })
  constructor(private sesionService: SesionService, private router: Router) { }

  ngOnInit(): void {
  }
  enviarCredenciales(){
    console.log('creddenciales enviadas', this.formModel.value);
    this.sesionService.iniciarSesion(this.formModel.value).subscribe(
      (data) => {
        this.respuestaSesion = data;
        this.router.navigate(['listaDeTareas'])
      },
      error =>  this.respuestaSesion = error.error
    )

  }

}
