import { Injectable } from '@angular/core';
import { ProductCart } from '../product/product-cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: ProductCart[] = [];
  constructor() {}

  addToCart(product: ProductCart) {
    let flag = 0;
    for (let index = 0; index < this.items.length; index++) {
      const element = this.items[index];
      if (element.id === product.id) {
        flag = 1;
        this.incrementQuantity(product);
      }
    }
    if (flag === 0) {
      this.items.push(product);
    }
  }

  deletefromCart(id: number) {
    for (let index = 0; index < this.items.length; index++) {
      if (this.items[index].id == id) {
        this.items.splice(index, 1);
      }
    }
  }

  getItems() {
    return this.items;
  }

  calculatePrice(c: ProductCart) {
    return c.uprice * c.quantity;
  }

  decrementQuantity(c: ProductCart) {
    for (let index = 0; index < this.items.length; index++) {
      if (this.items[index].id === c.id) {
        if (this.items[index].quantity > 1) {
          this.items[index].quantity -= 1;
          this.items[index].price = this.calculatePrice(this.items[index]);
          this.getCartTotal();
        } else {
          this.items.splice(index, 1);
        }
      }
    }
  }

  incrementQuantity(c: ProductCart) {
    for (let index = 0; index < this.items.length; index++) {
      if (this.items[index].id === c.id) {
        this.items[index].quantity += 1;
        this.items[index].price = this.calculatePrice(this.items[index]);
        this.getCartTotal();
      }
    }
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getCartTotal() {
    let sum = 0;
    this.items.forEach((ele) => {
      sum += ele.price;
    });
    return sum;
  }
}
