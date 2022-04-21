import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Activity, DTOActivity } from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private apiUrl = 'https://backend-eva-qkly8.ondigitalocean.app';
  private idSchool = "62608ca0374fa0f79740e3d6"

  constructor(
    private http: HttpClient
  ) { }

  getAllActivity(){
    return this.http.get<Activity[]>(`${this.apiUrl}/${this.idSchool}/actividades_extracurriculares`)
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

  getActivityById(id: string | null){
    return this.http.get<Activity>(`${this.apiUrl}/${this.idSchool}/actividades_extracurriculares/${id}`)
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

  createActivity(dto: DTOActivity){
    return this.http.post<Activity>(`${this.apiUrl}/${this.idSchool}/actividades_extracurriculares`, dto )
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

  updateActivity(id: string|null, dto: DTOActivity){
    return this.http.put<Activity>(`${this.apiUrl}/${this.idSchool}/actividades_extracurriculares/${id}`, dto )
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

  deleteActivity(id: string){
    return this.http.delete<Activity>(`${this.apiUrl}/${this.idSchool}/actividades_extracurriculares/${id}`)
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
