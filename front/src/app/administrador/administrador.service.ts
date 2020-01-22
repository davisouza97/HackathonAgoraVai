import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private baseUrl = `${environment.baseUrl}admin`;

  constructor(private http: HttpClient) { }

  public logar(admin: object): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, admin, { observe: 'response' });
  }

  public salvar(admin: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, admin);
  }
}
