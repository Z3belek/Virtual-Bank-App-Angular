import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { modifyUser, User } from '@core/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiBase;

  constructor(
    private http: HttpClient
  ) { }

  getUserData(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/auth/me`);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`)
  }

  modifyProfile(id: number, user: modifyUser): Observable<modifyUser> {
    return this.http.put<modifyUser>(`${this.apiUrl}/users/${id}`, user)
  }
}
