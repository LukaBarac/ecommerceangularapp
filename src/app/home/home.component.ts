import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';
import { Product } from '../shared/product/product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  products:Product[] = [];

  constructor(private productService:ProductService, private route:ActivatedRoute) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if(params['searchTerm']) 
        this.products = this.productService.getAllProductsBySearchTerm(params['searchTerm'])
      else if(params['tag'])
        this.products = this.productService.getAllProductsByTag(params['tag'])  
      else
        this.products = this.productService.getAll();
      })

  }

}
