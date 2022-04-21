import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Aggrement, DTOAggrenment, DTOCreateAggrenment } from '../models/aggrement.model';

@Injectable({
  providedIn: 'root'
})
export class AggrementService {

  private apiUrl = 'https://backend-eva-qkly8.ondigitalocean.app/instituciones';
  private idSchool= '62608ca0374fa0f79740e3d6';

  constructor(
    private http: HttpClient
  ) { }

  getAllAggrementBySchoolID(){
    return this.http.get<Aggrement[]>(`${this.apiUrl}/${this.idSchool}/convenios`)
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

  getAggrementById(id: string | null){
    return this.http.get<Aggrement>(`${this.apiUrl}/${this.idSchool}/convenios/${id}`)
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

  createAggrement(dto: DTOCreateAggrenment){
    return this.http.post<Aggrement>(`${this.apiUrl}/${this.idSchool}/convenios`, dto)
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

  updateAggrement(id: string| null, dto: DTOCreateAggrenment){
    return this.http.put<Aggrement>(`${this.apiUrl}/${this.idSchool}/convenios/${id}`, dto)
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

  deleteAggrement(id: string){
    return this.http.delete<Aggrement>(`${this.apiUrl}/${this.idSchool}/convenios/${id}`)
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

}
