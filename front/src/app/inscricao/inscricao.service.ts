import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InscricaoKey } from './InscricaoKey';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  private baseUrl = `${environment.baseUrl}inscricoes`;

  constructor(private http: HttpClient) { }

  getInscricao(inscricaoKey: InscricaoKey): Observable<any> {
    return this.http.post(`${this.baseUrl}/buscar`, inscricaoKey);
  }

  createInscricao(inscricao: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, inscricao);
  }

  updateInscricao(inscricao: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}`, inscricao);
  }

  deleteInscricao(candidatoId: number, exameId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${candidatoId}/${exameId}`);
  }

  getInscricaoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}