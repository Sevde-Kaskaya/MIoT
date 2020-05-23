import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { tap,retry, catchError } from 'rxjs/operators'
import { Detail } from '../models/detail';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  constructor(private http: HttpClient) { }

  path = "http://localhost:3000/details";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getDetails(): Observable<Detail[]> {
    return this.http
    .get<Detail[]>(this.path) 
    .pipe(
      tap(data =>console.log(JSON.stringify)),
      catchError(this.handleError)
    )
  }

  created = false;
  createdDetail(){
      this.created = true;
      localStorage.setItem("isCreated", "true");
  }

  handleError(err: HttpErrorResponse) {
    let errMessage = "";
    if (err.error instanceof ErrorEvent) {
      errMessage = "Bir hata olustu" + err.error.message;
    } else {
      errMessage = "Sistemsel hata";
    }

    console.log(errMessage);
    return throwError(errMessage);
  }
}
