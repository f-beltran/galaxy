import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RespuestaSesion} from "../modelo/respuesta-sesion";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  constructor(private http: HttpClient) { }

  // iniciarSesion(payload: any): Observable<RespuestaSesion>{
  //   return  this.http.post<RespuestaSesion>('http://192.168.0.111/BackendTareas/Login', payload).pipe(
  //     tap( (e) => localStorage.setItem('token', e.datos.token) )
  //   )
  // }

  iniciarSesion(payload: any): Observable<RespuestaSesion>{
    return  this.http.post<RespuestaSesion>('https://backend.cba.ucb.edu.bo/BETareas/Login', payload).pipe(
      tap( (e) => localStorage.setItem('token', e.datos.token) )
    )
  }

}
