import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, pipe, throwError } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
import { IApiArgs } from '../models/iapi-args';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T> {

  constructor(protected _http: HttpClient) { }

  getAll(args: IApiArgs): Observable<T[]> {
    const headers = new HttpHeaders({
      'Content-Type': (args.accept.length !== 0 ? args.accept : 'application/json')
    })
    // const header = {
    //   'Content-Type': (args.accept.length !== 0 ? args.accept : 'application/json')
    // };
    // const requestOptions = {
    //   Headers: new HttpHeaders(header)
    // };
    return this._http.get<T[]>(args.url, 
      { headers }) // { headers: { 'Content-Type': 'application/json; charset=utf-8'}})
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(err: HttpErrorResponse) {
    return throwError('Error occurred! msg: ' + err.message + ' status: ' +  err.statusText);
  }
}
