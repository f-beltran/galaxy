import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.scss']
})
export class ContenedorComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }
  cerrarSesion(){
    localStorage.removeItem('token')
    this.router.navigate(['iniciarSesion'])
  }

}
