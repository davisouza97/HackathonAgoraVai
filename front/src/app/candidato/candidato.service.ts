import { Candidato } from './candidato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { isNullOrUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class CandidatoService {
  private baseUrl = `${environment.baseUrl}candidatos`;

  constructor(private http: HttpClient) { }

  public getCandidato(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { observe: 'response' });
  }

  public persistirCandidato(candidato: Candidato): Observable<object> {
    if (isNullOrUndefined(candidato.id)) {
      return this.createCandidato(candidato);
    } else {
      return this.updateCandidato(candidato);
    }
  }

  public createCandidato(candidato: Candidato): Observable<object> {
    return this.http.post(`${this.baseUrl}`, candidato);
  }

  public updateCandidato(candidato: Candidato): Observable<object> {
    return this.http.put(`${this.baseUrl}/${candidato.id}`, candidato);
  }

  public deleteCandidato(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  public getCandidatosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}