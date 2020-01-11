import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private baseUrl = 'http://localhost:8080/candidatos';

  constructor(private http: HttpClient) { }

  getCandidato(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`,{ observe: 'response' });
  }

  createCandidato(candidato: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, candidato);
  }

  updateCandidato(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCandidato(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCandidatosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}