import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { createOrModifyAccount, Account, depositToAccount } from '@core/models/account.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  apiUrl = environment.apiBase;

  constructor(
    private http: HttpClient
  ) { }

  createAccount(account: createOrModifyAccount) {
    return this.http.post(`${this.apiUrl}/accounts`, account)
    .subscribe(data => (data))
  }

  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.apiUrl}/accounts`);
  }

  getMyAccounts():Observable<Account[]> {
    return this.http.get<Account[]>(`${this.apiUrl}/accounts/me`);
  }

  depositToAccount(id: number, account: depositToAccount) {
    return this.http.post(`${this.apiUrl}/accounts/${id}`, account).subscribe(data => (data))
  }

  detailedAccount(id: number): Observable<Account> {
    return this.http.get<Account>(`${this.apiUrl}/accounts/${id}`);
  }

  updateAccount(id: number, account: createOrModifyAccount) {
    return this.http.put(`${this.apiUrl}/accounts/${id}`, account);
  }

  deleteAccount(id: number) {
    return this.http.delete(`${this.apiUrl}/accounts/${id}`);
  }
}
