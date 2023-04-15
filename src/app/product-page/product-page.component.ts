import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product/product.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{

  product!: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, 
    private cartService:CartService, private router:Router) {

    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.product = productService.getProductById(params['id'])
    })
  }

  addToCart(){
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
  }

  ngOnInit(): void {
    
  }
}
