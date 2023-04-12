import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/product/product'; 
import { Tag } from 'src/app/shared/product/tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductById(id: number): Product {
    return this.getAll().find(product => product.id == id)!
  }

  getAllProductsBySearchTerm(searchTerm:string) :Product[] {
    return this.getAll().filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags():Tag[] {
    return [
      { name: 'All', count: 7 },
      { name: 'headphones', count: 2 },
      { name: 'tv', count: 2 },
      { name: 'phone', count: 3 },
      { name: 'apple', count: 2 },
      { name: 'lg', count: 1 },
      { name: 'samsung', count: 2 },
      { name: 'sony', count: 1 },
      { name: 'xiaomi', count: 1 }
    ]
  }

  getAllProductsByTag(tag: string): Product[] {
    
    return tag == "All" ? this.getAll() : this.getAll().filter(product => product.tags?.includes(tag));
 /* if(tag == "All")
      return this.getAll();
    else
      return this.getAll().filter(product => product.tags?.includes(tag)); */
  }

  getAll():Product[]{
    return [
      {
        id: 1,
        name: 'appleheadphones',
        price: 50,
        tags: ['apple', 'headphones'],
        favorite: false,
        stars: 4.0,
        imageUrl: '/assets/images/appleheadphones.jpg'
      },
      {
        id: 2,
        name: 'appleiphone',
        price: 30,
        tags: ['apple', 'phone'],
        favorite: false,
        stars: 2.0,
        imageUrl: '/assets/images/appleiphone.png'
      },
      {
        id: 3,
        name: 'lgtv',
        price: 70,
        tags: ['lg', 'tv'],
        favorite: true,
        stars: 4.0,
        imageUrl: '/assets/images/lgtv.jpg'
      },
      {
        id: 4,
        name: 'samsungphone',
        price: 80,
        tags: ['samsung', 'phone'],
        favorite: false,
        stars: 5.0,
        imageUrl: '/assets/images/samsungphone.jpeg'
      },
      {
        id: 5,
        name: 'samsungtv',
        price: 60,
        tags: ['samsung', 'tv'],
        favorite: false,
        stars: 3.0,
        imageUrl: '/assets/images/samsungtv.jpeg'
      },
      {
        id: 6,
        name: 'sonyheadphones',
        price: 45,
        tags: ['sony', 'headphones'],
        favorite: false,
        stars: 4.0,
        imageUrl: '/assets/images/sonyheadphones.jpg'
      },
      {
        id: 7,
        name: 'xiaomiphone',
        price: 45,
        tags: ['xiaomi', 'phone'],
        favorite: true,
        stars: 5.0,
        imageUrl: '/assets/images/xiaomiphone.png'
      }
    ]
  }
}
