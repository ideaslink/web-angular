import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ITopicDetailDTO } from '../models/itopic-detail-dto';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { ChunkPipe } from '../pipes/chunk.pipe';

@Component({
  standalone: true,
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  imports: [CommonModule, ChunkPipe]
})
export class ProductDetailComponent implements OnInit {
  topicid: number = 0;
  topics$!: ITopicDetailDTO[]; // IProductDTO[];
  title: string = "Details";
  
  constructor(private route: ActivatedRoute, private prodservice: ProductService) { }

  getTitle(tid: number): string {
    
    return this.title;
  }
  ngOnInit() {
    this.topicid = Number(this.route.snapshot.paramMap.get('id'));
    this.prodservice.getProductDetails(this.topicid).subscribe(result => {
      this.topics$ = result.sort((a, b) => a.Order - b.Order);
    });

    // this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.topicid = Number(params.get('id'));
    //   })
    // );
    // this.route.queryParams.subscribe(params => { this.topicid = params['id']; });
  }
}
