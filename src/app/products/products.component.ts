import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProductDTO } from '../models/iproduct-dto';
import { ITopicDTO } from '../models/itopic-dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule]
})
export class ProductsComponent implements OnInit {
  pid = 1;
  // topics$!: Observable<ITopicDTO[]>;
  topiccount: number = 0;
  topics$!: ITopicDTO[];
  hasDetails: boolean = false;

  constructor(private prodsvr: ProductService) { }

  hasDetail(tid: number): boolean {
     return true; // this.prodsvr.hasDetail(tid);
  }

  ngOnInit(): void {
/*     const v: ITopicDTO[] = [
      { TopicID: 10, Topic: 'Topic 1',  Author: 'HSharp', TopicBody: 'This is body', Description:'topic 1', Level: 1, DateUpdated: new Date(), Link: 'www.viewcrossing.com', LinkMore: 'www.microsoft.com', ParentTopicID: 11, Order: 1, Images: [], Details: [], HasDetail: true },
      { TopicID: 11, Topic: 'Topic 2',  Author: 'HSharp', TopicBody: 'This is body', Description:'topic 2', Level: 1, DateUpdated: new Date(), Link: 'www.viewcrossing.com', LinkMore: 'www.microsoft.com', ParentTopicID: 10, Order: 2, Images: [], Details: [], HasDetail: true }
    ];
    this.topics$ = v;
    this.topiccount = v.length; */

/*     this.topics$ = of(v);
    this.topics$.subscribe( result => {
      this.topiccount = result.length;
    }) */

/*     this.topics$ = this.prodsvr.getProducts(this.pid);
    this.topics$.subscribe( result => {
      this.topiccount = result.length;}) */

    this.prodsvr.getProducts(this.pid).subscribe( result => {
      this.topics$ = result.sort((a, b) => a.Order - b.Order);
      this.topiccount = result.length;
    });
  }
}
