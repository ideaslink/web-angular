import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IProductDTO } from '../models/iproduct-dto';
import { IApiArgs } from '../models/iapi-args';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';
import { ITopicDTO } from '../models/itopic-dto';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends ApiService<ITopicDTO> {
  hasDetailcount = true;

  constructor(protected override _http: HttpClient) {
    super(_http);
  }

  getProducts(pid: number): Observable<ITopicDTO[]> {
    const url = '../../assets/topic_api.json'; // 'http://localhost:53855/api/topics/' + pid + '/details'; //
    const args: IApiArgs = { url: url, page: 1, count: 0, accept: 'application/json' };
    return this.getAll(args)
    .pipe(
      catchError(this.handleError)
    );
  }

  getProductDetails(tid: number): Observable<ITopicDTO[]> { // Observable<IProductDTO[]> {
    // const url =  'assets/topic_api.json';  // 'http://localhost:53855/api/topics/' + tid;
    // const args: IApiArgs = { url: url, page: 1, count: 0, accept: 'application/json' };
    const pid = 1; // this is topic page
    return this.getProducts(pid).pipe(map( ps => ps.filter(p => p.ParentTopicID === tid)));
  }

  hasDetail(tid: number): boolean {
    this.getProductDetails(tid).subscribe(
      result$ => {
      const topics$: ITopicDTO[] = result$;
      this.hasDetailcount = topics$.filter(s => s.ParentTopicID === tid).length > 0;
    },
    err => this.hasDetailcount = false);
    return this.hasDetailcount;
  }
}
