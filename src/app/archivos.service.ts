import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';

import { Datos } from './datos';

@Injectable({
  providedIn: 'root'
})
export class ArchivosService {

  private url = 'https://localhost:7287/api/UploadFile';

  constructor(private http: HttpClient) { }

  // public getArchivosCargados() {


  //   // Endpoint de la API
  //   return this.http.get<any>(`${this.url}`).pipe(catchError((error: any) => {
  //     console.log(error.statusText + ' sendGetRequestParameters');
  //     return error;
  //   }));


  // }

  getArchivosCargados(): Observable<any> {
    return this.http.get<any>(`${this.url}`).pipe(
      map(resp => {
        return resp.data;
      }), catchError((error: any) => {
        console.log(error.statusText + ' getArchivosCargados');
        return [];
      })
    );
  }

  getArchivosId(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`).pipe(
      map(resp => {
        return resp.data;
      }), catchError((error: any) => {
        console.log(error.statusText + ' getArchivosCargados');
        return [];
      })
    );
  }
}
