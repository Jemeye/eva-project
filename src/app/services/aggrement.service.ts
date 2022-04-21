import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Aggrement } from '../models/aggrement.model';

@Injectable({
  providedIn: 'root'
})
export class AggrementService {

  private apiUrl = 'https://eva-back.herokuapp.com/instituciones';

  constructor(
    private http: HttpClient
  ) { }

  getAllAggrementBySchoolID(id: string){
    return this.http.get<Aggrement>(`${this.apiUrl}/${id}/convenio`)
   //manejo de errores
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == HttpStatusCode.Unauthorized){
          return throwError('No estás autorizado');
        }
        return throwError('Algo salió mal');
      })
    )

  }

  getAggrementById(){

  }

  createAggrement(){

  }

  updateAggrement(id: string){

  }

  deleteAgrrement(id: string){

  }

}
