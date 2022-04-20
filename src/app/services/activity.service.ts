import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  private apiUrl = '';

  constructor(
    private http: HttpClient
  ) { }

  getAllActivity(){

  }

  getActivityById(){

  }

  createActivity(){

  }

  updateActivity(id: string){

  }

  deleteActivity(id: string){

  }




}
