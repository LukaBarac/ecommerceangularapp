import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/product/product'; 
import { Tag } from 'src/app/shared/product/tag';

export interface Specification {
  name: string;
  value: string;
}

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

  productSpecifications: {[productId: number]: Specification[]} = {
    1: [
      {name: 'Battery', value: '300 mAh'},
      {name: 'Frequency', value: '20 - 20 KHz'},
      {name: 'Microphone', value: '4 MEMS'},
      {name: 'Type', value: 'Over-Ear'},
      {name: 'Battery charge time', value: '2 hours'},
      {name: 'Battery duration', value: '25 hours'},
      {name: 'Other', value: 'Bluetooth: 5,2; Chipset: HFP, HSP, A2DP, AVRCP'}

    ],
    2: [
      {name: 'Display', value: '6,7"'},
      {name: 'Display description', value: 'Super Retina XDR; OLED; HDR Display'},
      {name: 'Bluetooth', value: '5.3'},
      {name: 'Memory', value: '256 GB'},
      {name: 'Main camera', value: '12 MP + 12 MP'},
      {name: 'Selfie camera', value: '12 MP'},
      {name: 'OS', value: 'iOS 16'},
      {name: 'CPU', value: 'A15 Bionic chip; 16 Core Neural Engine'},
      {name: 'Resolution', value: '2778 x 1284 px'}
    ],
    3: [
      {name: 'Display', value: '77"'},
      {name: 'HDMI', value: '4'},
      {name: 'LAN', value: 'Yes'},
      {name: 'OS', value: 'Android'},
      {name: 'Other connections', value: '1 x RF; 2 x IF; 1 x Digital audio out'},
      {name: 'Bluetooth', value: '4.2'},
      {name: 'Resolution', value: '3840 x 2160 px'},
      {name: 'Display technology', value: 'OLED'},
      {name: 'Audio', value: 'Acoustic Surface Audio+'}
    ],
    4: [
      {name: 'Display', value: '6,6"'},
      {name: 'Display description', value: 'Dynamic AMOLED 2X'},
      {name: 'Bluetooth', value: '5.3'},
      {name: 'Memory', value: '256 GB'},
      {name: 'Main camera', value: '50 MP + 10 MP + 12 MP'},
      {name: 'Selfie camera', value: '12 MP'},
      {name: 'OS', value: 'Android 13, One UI 5.1'},
      {name: 'CPU', value: 'Octa-Core (1x3.2 GHz Cortex X3'},
      {name: 'Resolution', value: '1080 x 2340 px'}
    ],
    5: [
      {name: 'Display', value: '65"'},
      {name: 'HDMI', value: '4'},
      {name: 'LAN', value: 'Yes'},
      {name: 'OS', value: 'Tizen'},
      {name: 'Other connections', value: '1x Diagonal audio out; RF in; eARC'},
      {name: 'Bluetooth', value: '5.2'},
      {name: 'Resolution', value: '3840 x 2160 px'},
      {name: 'Display technology', value: 'OLED'},
      {name: 'Audio', value: '2.2.2 CH; Dolby Digital Plus'}
    ],
    6: [
      {name: 'Battery', value: '250 mAh'},
      {name: 'Frequency', value: '7 - 25 KHz'},
      {name: 'Microphone', value: 'MICRO jet'},
      {name: 'Type', value: 'Over-Ear'},
      {name: 'Battery charge time', value: '1.5 hours'},
      {name: 'Battery duration', value: '30 hours'},
      {name: 'Other', value: 'Bluetooth: 5,2; Chipset: A2DP, AVRCP, HFP, HSP'}
    ],
    7: [
      {name: 'Display', value: '6,36"'},
      {name: 'Display description', value: 'Amoled, 120Hz FHD+'},
      {name: 'Bluetooth', value: '5.3'},
      {name: 'Memory', value: '256 GB'},
      {name: 'Main camera', value: '54 MP + 50 MP'},
      {name: 'Selfie camera', value: '32 MP'},
      {name: 'OS', value: 'Android 13, One UI 5.1'},
      {name: 'CPU', value: 'HexaGiga-Core (4x3.2 GHz Aquila X16'},
      {name: 'Resolution', value: '2400 x 1080 px'}
    ]
  }

  getSpecifications(id: number):Specification[]{
    return this.productSpecifications[id] || [];
  }
}
