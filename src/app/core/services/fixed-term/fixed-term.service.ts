import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import { createOrModifyFixedTerm, FixedTerm } from '@core/models/fixed-term.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FixedTermService {

  private apiUrl = environment.apiBase;

  constructor(
    private http: HttpClient
  ) { }

  createFixedTerm(fixedTerm: createOrModifyFixedTerm) {
    return this.http.post<FixedTerm>(`${this.apiUrl}/fixeddeposits`, fixedTerm).subscribe(data => (data))
  }

  getAllMyFixedTerms(): Observable<FixedTerm[]> {
    return this.http.get<FixedTerm[]>(`${this.apiUrl}/fixeddeposits`);
  }

  getFixedTermById(id: number): Observable<FixedTerm> {
    return this.http.get<FixedTerm>(`${this.apiUrl}/fixeddeposits/${id}`);
  }

  modifyFixedTerm(id: number, fixedTerm: createOrModifyFixedTerm) {
    return this.http.put(`${this.apiUrl}/fixeddeposits/${id}`, fixedTerm);
  }

  deleteFixedTerm(id: number) {
    return this.http.delete(`${this.apiUrl}/fixeddeposits/${id}`);
  }
}
