import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { CartService } from '../services/cart/cart.service';
import { Specification } from '../services/product/product.service'; // Import the Specification interface


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{

  product!: Product;
  specifications!: Specification[];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, 
    private cartService:CartService, private router:Router) {

    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.product = productService.getProductById(params['id'])
        this.specifications = productService.getSpecifications(this.product.id)
    })
  }

  addToCart(){
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
  }

  ngOnInit(): void {
    
  }


}