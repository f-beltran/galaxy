import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {TareasService} from "../servicios/tareas.service";

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {
  constructor(private router: Router, private tareasService: TareasService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    // return of (false);
    // console.log('Moviendose de ruta')
    if(localStorage.getItem('token')){
      return true;
    } else {
      return this.router.createUrlTree(['iniciarSesion']);
    }
  }
}
