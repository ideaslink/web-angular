import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, withFetch, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, pipe, throwError } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
import { IApiArgs } from '../models/iapi-args';
import { ITopicDetailDTO } from '../models/itopic-detail-dto';
import { error } from 'console';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T> {
  deta: any;

  constructor(protected _http: HttpClient) { }

  getAll(args: IApiArgs): Observable<T[]> {
    const headers = new HttpHeaders({
      'Content-Type': (args.accept.length !== 0 ? args.accept : 'application/json')
    })
    return this._http.get<T[]>(args.url, 
      { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  getDetails(args: IApiArgs, tid: number): Observable<ITopicDetailDTO[]> {
    const headers = new HttpHeaders({
      'Content-Type': (args.accept.length !== 0 ? args.accept : 'application/json')
    })
    return this._http.get<ITopicDetailDTO[]>(args.url, 
      { headers })
      .pipe(
        map(result => result.filter(s => s.TopicID == tid)),
        catchError(this.handleError)
      );
  }

  setDetail(data: any) {
    this.deta = data;
  }

  getData(){
    return this.deta;
  }

  handleError(err: HttpErrorResponse) {
    return throwError('Error occurred! msg: ' + err.message + ' status: ' +  err.statusText);
  }
}
