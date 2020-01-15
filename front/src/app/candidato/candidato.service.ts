import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  private baseUrl = `${environment.baseUrl}candidatos`;

  constructor(private http: HttpClient) { }

  public getCandidato(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, { observe: 'response' });
  }

  public createCandidato(candidato: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, candidato);
  }

  public updateCandidato(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  public deleteCandidato(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  public getCandidatosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}