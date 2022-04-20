import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AggrementService {

  private apiUrl = '';

  constructor(
    private http: HttpClient
  ) { }

  getAllAggrement(){

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
