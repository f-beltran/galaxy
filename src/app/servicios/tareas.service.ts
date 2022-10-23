import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ListaTareas, RespuestaSesion} from "../modelo/respuesta-sesion";
import {catchError, map, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor( private http: HttpClient) { }

  // obtenerTareas(): Observable<ListaTareas>{
  //   return this.http.get<ListaTareas>('http://192.168.0.111/BackendTareas/Tareas/Lista')
  // }
  // crearTarea(payload: any): Observable<RespuestaSesion>{
  //   return this.http.post<RespuestaSesion>('http://192.168.0.111/BackendTareas/Tareas/Guardar', payload)
  // }
  // cambiarEstado(payload: any){
  //   return this.http.post<RespuestaSesion>('http://192.168.0.111/BackendTareas/Tareas/EditarEstado', payload)
  // }
  // eliminarTarea(payload: any){
  //   return this.http.post<RespuestaSesion>('http://192.168.0.111/BackendTareas/Tareas/Eliminar', payload)
  // }
  obtenerTareas(): Observable<ListaTareas>{
    return this.http.get<ListaTareas>('https://backend.cba.ucb.edu.bo/BETareas/Tareas/Lista')
  }
  crearTarea(payload: any): Observable<RespuestaSesion>{
    return this.http.post<RespuestaSesion>('https://backend.cba.ucb.edu.bo/BETareas/Tareas/Guardar', payload)
  }
  cambiarEstado(payload: any){
    return this.http.post<RespuestaSesion>('https://backend.cba.ucb.edu.bo/BETareas/Tareas/EditarEstado', payload)
  }
  eliminarTarea(payload: any){
    return this.http.post<RespuestaSesion>('https://backend.cba.ucb.edu.bo/BETareas/Tareas/Eliminar', payload)
  }
  verificarToken(): Observable<any>{
    return this.http.post('https://backendapirichardcanoa.azurewebsites.net/Usuario/ValidToken', {}).pipe(
      tap( x => console.log('devolviendo desde el guard',x)),
      map( x => true),

      catchError(this.manejarError)
    )
    // return of(false)
  }

  private manejarError(
    error: HttpErrorResponse
  ): Observable<boolean> {
    return of(false)
  }
}
