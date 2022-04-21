import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { DTOSchool, School } from '../models/school.model';

@Injectable({
  providedIn: 'root'
})

export class SchoolService {

  private apiUrl = 'https://backend-eva-qkly8.ondigitalocean.app/instituciones';

  constructor(
    private http: HttpClient
  ) { }

  getAllSchool(){
    return this.http.get<School[]>(this.apiUrl)
   //manejo de errores
   .pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status == 500){
        return throwError('No estás autorizado');
      }
      return throwError('Algo salió mal');
    })
  )
  }

  getSchoolById(id: string | null){
    return this.http.get<School>(`${this.apiUrl}/${id}`)
   //manejo de errores
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == 500){
          return throwError('No estás autorizado');
        }
        return throwError('Algo salió mal');
      })
    )
  }

  createSchool(dto: DTOSchool){
    console.log(JSON.stringify(dto))
    return this.http.post<School>(this.apiUrl, dto)
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

  updateSchool(id: string|null, dto: DTOSchool){
    return this.http.put<School>(`${this.apiUrl}/${id}`, dto)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status == HttpStatusCode.Unauthorized){
          return throwError('No estás autorizado');
        }
        return throwError('Algo salió mal');
      })
    )

  }

  deleteSchool(id: string){
    return this.http.delete<School>(`${this.apiUrl}/${id}`)
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
