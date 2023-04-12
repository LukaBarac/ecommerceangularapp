import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/product/tag';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  productPageTags?:string[];

  @Input()
  justifyContent:string = 'center';

  tags?:Tag[];

  constructor(private productService:ProductService) {}

  ngOnInit(): void {
    if(!this.productPageTags) /* da ne ucitava sve tagove */
      this.tags = this.productService.getAllTags();
  }
}
