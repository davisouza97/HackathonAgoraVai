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

  public getExame(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { observe: 'response' });
  }

  public createExame(candidato: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, candidato, { observe: 'response' });
  }

  public updateExame(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value , { observe: 'response' });
  }

  public deleteExame(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  public getExamesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  public getInscricoesExame(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/inscricoes/${id}`);
  }

  public getAprovadosExame(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/aprovados/${id}`);
  }
}
