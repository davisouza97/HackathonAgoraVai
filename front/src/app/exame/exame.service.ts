import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExameService {
  private baseUrl = `${environment.baseUrl}exames`;

  constructor(private http: HttpClient) { }

  getExame(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { observe: 'response' });
  }

  createExame(candidato: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, candidato, { observe: 'response' });
  }

  updateExame(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value , { observe: 'response' });
  }

  deleteExame(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getExamesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getInscricoesExame(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/inscricoes/${id}`);
  }
}
