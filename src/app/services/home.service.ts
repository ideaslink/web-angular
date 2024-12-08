import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IShowcaseDTO } from '../models/ishowcase-dto';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs';
import { IApiArgs } from '../models/iapi-args';

@Injectable({
  providedIn: 'root'
})
export class HomeService extends ApiService<IShowcaseDTO> {
  // constructor() { }

  getshowcasess(count: number): Observable<IShowcaseDTO[]> {
    const url = 'showcase.json'; 
    const args: IApiArgs = { url: url, page: 1, count: 0, accept: 'application/json' };
    return this.getAll(args).pipe(
      catchError(this.handleError)
    )
  }
}
