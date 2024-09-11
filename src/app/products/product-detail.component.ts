import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, ActivationEnd } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { IProductDTO } from '../models/iproduct-dto';
import { ITopicDTO } from '../models/itopic-dto';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  topicid = 10;
  topics$!: ITopicDTO[]; // IProductDTO[];
  constructor(private route: ActivatedRoute, private prodservice: ProductService) { }

  ngOnInit() {
    this.topicid = Number(this.route.snapshot.paramMap.get('id'));
    this.prodservice.getProductDetails(this.topicid).subscribe(result => {
      this.topics$ = result;
    });
    // this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.topicid = Number(params.get('id'));
    //   })
    // );
    // this.route.queryParams.subscribe(params => { this.topicid = params['id']; });
  }
}
