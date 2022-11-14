import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser, RegisterUser } from '@core/models/auth.model';
import { environment } from '@env/environment';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiBase;
  currentUserSubject!: BehaviorSubject<any>;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {
    this.currentUserSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('user') || '{}')
    );
  }

  login(user: LoginUser): Observable<LoginUser> {
    return this.http.post<LoginUser>(`${this.apiUrl}/auth/login`, user).pipe(
      tap((user) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
      })
    )
  }

  resetPassword(id: number, password: string) {
    return this.http.patch(`${this.apiUrl}/users/resetPassword/${id}`, { password });
  }

  get userAuth() {
    return this.currentUserSubject.value;
  }

  loggedIn(user: any) {
    this.localStorageService.saveToken(user);
  }

  logout() {
    this.localStorageService.removeToken();
  }

  register(user: RegisterUser) {
    return this.http.post(`${this.apiUrl}/users`, user).pipe(
      catchError((error) => {
        return error;
      })
    )
  }
}
