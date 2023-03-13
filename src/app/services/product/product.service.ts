import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll():String[]{
    return [
      '/assets/images/appleheadphones.jpg',
      '/assets/images/appleiphone.png',
      '/assets/images/lgtv.jpg',
      '/assets/images/samsungphone.jpg',
      '/assets/images/samsungtv.jpeg',
      '/assets/images/sonyheadphones.jpg',
      '/assets/images/xiaomiphone.png'
    ]
  }
}
