import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MAPA_PHNMSIPA } from '../material/pdas';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SimulaBackendService {
  private apiUrl = `http://localhost:5000/`;
  constructor(private http: HttpClient) { }

  // list(): Observable<any>{
  //   return this.http.get(this.apiUrl);
  // }
  list(): Observable<MAPA_PHNMSIPA[]>{
    return this.http.get<MAPA_PHNMSIPA[]>(`${this.apiUrl}listado-pagos`).pipe(
      tap(() => console.log('conectado a python'))
    );
  }
  getCabecera(): Observable<any>{
    return this.http.get(`${this.apiUrl}cabecera`)
  }
  getAyuda(manual: string): Observable<any>{
    return this.http.get(`${this.apiUrl}ayuda/${manual}`)
  }

  getDetalle(): Observable<any>{
    return this.http.get(`${this.apiUrl}recibo`)
  }

}
