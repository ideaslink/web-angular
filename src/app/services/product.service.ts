import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { IProductDTO } from '../models/iproduct-dto';
import { IApiArgs } from '../models/iapi-args';
import { Observable } from 'rxjs';
import { ITopicDTO } from '../models/itopic-dto';
import { ITopicDetailDTO } from '../models/itopic-detail-dto';
import { filter, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService extends ApiService<ITopicDTO> {
  hasDetailcount = true;

  // constructor(protected override _http: HttpClient) {
  //   super(_http);
  // }

  getProducts(pid: number): Observable<ITopicDTO[]> {
    const url = 'topic_api.json'; 
    const args: IApiArgs = { url: url, page: 1, count: 0, accept: 'application/json' };
    return this.getAll(args)
    .pipe(
      catchError(this.handleError)
    );
  }

  getProductDetails(tid: number): Observable<ITopicDetailDTO[]> { 
    const url = 'topic_detail_api.json'; 
    const args: IApiArgs = { url: url, page: 1, count: 0, accept: 'application/json' };
    return this.getDetails(args, tid)
    .pipe(
      catchError(this.handleError)
    );
  }

/*   getProductDetails(tid: number): Observable<ITopicDTO[]> { 
    const pid = 1; // this is topic page
    return this.getProducts(pid).pipe(
      map(ps => ps.filter(p => p.ParentTopicID === tid)),
      catchError(this.handleError)
    );
  } */

  hasDetail(tid: number): boolean {
    this.getProductDetails(tid).subscribe({
      next: result$ => {
      const x: ITopicDetailDTO[] = result$;
      this.hasDetailcount = x.length > 0;
      },
      error: err => this.hasDetailcount = false});
    // this.getProductDetails(tid).subscribe(
    //   result$ => {
    //   const topics$: ITopicDTO[] = result$;
    //   this.hasDetailcount = topics$.filter(s => s.ParentTopicID === tid).length > 0;
    // },
    // err => this.hasDetailcount = false);
    return this.hasDetailcount;
  }
}
