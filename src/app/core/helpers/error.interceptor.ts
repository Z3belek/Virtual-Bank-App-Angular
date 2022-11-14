import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.router.navigate(['/login']);
        };
        if (err.status === 403) {
          this.router.navigate(['/forbidden']);
        };
        if (err.status === 404) {
          this.router.navigate(['/not-found']);
        };
        if (err.status === 500) {
          this.router.navigate(['/server-error']);
        };
        if (err.status === 503) {
          this.router.navigate(['/service-unavailable']);
        };
        if (err.status === 504) {
          this.router.navigate(['/gateway-timeout']);
        }
        return throwError(() => err);
      }
      )
    )
  }
}
