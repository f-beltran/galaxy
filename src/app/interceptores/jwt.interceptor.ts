import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {handleAutoChangeDetectionStatus} from "@angular/cdk/testing";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = localStorage.getItem('token')? localStorage.getItem('token') : '';
    if (token) {
      const clonedRequest = request.clone(
        { headers: request.headers.set('Authorization', 'Bearer '+token)}
      );
      return next.handle(clonedRequest);
    } else {
      return next.handle(request);
    }
  }
}
