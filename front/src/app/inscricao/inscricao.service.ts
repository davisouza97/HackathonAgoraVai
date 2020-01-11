import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InscricaoKey } from './InscricaoKey';

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  private baseUrl = 'http://localhost:8080/inscricoes';

  constructor(private http: HttpClient) { }

  getInscricao(inscricaoKey: InscricaoKey): Observable<any> {
    return this.http.post(`${this.baseUrl}/buscar`, inscricaoKey);
  }

  createInscricao(inscricao: Object): Observable<Object> {
    debugger;
    return this.http.post(`${this.baseUrl}`, inscricao);
  }

  deleteInscricao(candidatoId: number, exameId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${candidatoId}/${exameId}`);
  }

  getInscricaoList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}