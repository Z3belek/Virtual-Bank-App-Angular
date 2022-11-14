import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { createOrModifyTransaction, Transaction } from '@core/models/transaction.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  apiUrl = environment.apiBase;

  constructor(
    private http: HttpClient
  ) { }

  newTransaction(transaction: createOrModifyTransaction) {
    return this.http.post(`${this.apiUrl}/transactions`, transaction)
    .subscribe(data => (data))
  }

  getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/transactions`);
  }

  getTransactionById(id: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.apiUrl}/transactions/${id}`);
  }

  modifyTransaction(id: number, transaction: createOrModifyTransaction) {
    return this.http.put(`${this.apiUrl}/transactions/${id}`, transaction);
  }

  deleteTransaction(id: number) {
    return this.http.delete(`${this.apiUrl}/transactions/${id}`);
  }
}
