import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth/auth.service';
import { LocalStorageService } from '@core/services/auth/local-storage.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  user: any;

  constructor(
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUser = this.authService.userAuth;
    const data = this.localStorageService.getToken('this.user');

    if(data) {
      request = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + data)
      })
    }
    return next.handle(request);
  }
}