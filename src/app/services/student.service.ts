import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl = '';

  constructor(
    private http: HttpClient
  ) { }

  getAllStudent(){

  }

  getAllStudentBySchool(id: string){

  }

  getStudentById(id: string){

  }

  createStudent(){

  }

  updateStudent(id: string){

  }

  deleteStudent(id: string){

  }

}
