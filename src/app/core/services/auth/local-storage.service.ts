import { Injectable } from '@angular/core';
import { browserRefresh } from './store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from './store';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(
    private store: Store<AppState>
  ) { }

  saveToken(token: string) {
    localStorage.setItem('user', token);
  }

  getToken(user: any) {
    if(localStorage.getItem("user") !== null) {
      this.store.dispatch(browserRefresh({user}));
      const {accessToken} = JSON.parse(localStorage.getItem("user") as string);
      return accessToken;
    }
  }

  removeToken() {
    localStorage.removeItem('user');
  }
}
