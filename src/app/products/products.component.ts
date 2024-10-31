import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProductDTO } from '../models/iproduct-dto';
import { ITopicDTO } from '../models/itopic-dto';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pid = 1;
  topics$!: ITopicDTO[];

  constructor(private prodsvr: ProductService) { }

  // hasDetail(tid: number): boolean {
  //   return true; // this.prodsvr.hasDetail(tid);
  // }

  ngOnInit(): void {
    this.prodsvr.getProducts(this.pid).subscribe( result => {
      this.topics$ = result;
    });
  }
}
