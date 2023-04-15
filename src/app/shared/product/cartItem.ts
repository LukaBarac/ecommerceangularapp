import { Product } from "./product";

export class CartItem {

    constructor(product:Product) {
        this.product = product;
        this.getPrice();                              /*  ovde bi stajao  this.price */
    }

    product:Product;
    quantity:number = 1;

    getPrice(): number {                             /* moze da se napravi accessor   get  price() */
        return this.product.price * this.quantity;
    }
}