import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ListaTareas, RespuestaSesion} from "../modelo/respuesta-sesion";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor( private http: HttpClient) { }

  obtenerTareas(): Observable<ListaTareas>{
    return this.http.get<ListaTareas>('http://192.168.0.111/BackendTareas/Tareas/Lista')
  }
  crearTarea(payload: any): Observable<RespuestaSesion>{
    return this.http.post<RespuestaSesion>('http://192.168.0.111/BackendTareas/Tareas/Guardar', payload)
  }
  cambiarEstado(payload: any){
    return this.http.post<RespuestaSesion>('http://192.168.0.111/BackendTareas/Tareas/EditarEstado', payload)
  }
  eliminarTarea(payload: any){
    return this.http.post<RespuestaSesion>('http://192.168.0.111/BackendTareas/Tareas/Eliminar', payload)
  }
}
