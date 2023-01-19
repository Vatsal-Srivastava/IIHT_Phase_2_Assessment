import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProductCart } from 'src/app/product/product-cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  //Initialize total price
  total: number = 0;
  //Initialize list of cart Item
  cartList!: ProductCart[];
  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit(): void {
    this.cartList = this.cartService.getItems();
    this.total = this.cartService.getCartTotal();
  }

  quan_Sub(c: ProductCart) {
    //Drecrease quantity Service
    this.cartService.decrementQuantity(c);

    //Updating Total
    this.total = this.cartService.getCartTotal();
  }
  quan_Add(c: ProductCart) {
    //Increase quantity Service
    this.cartService.incrementQuantity(c);

    //Updating Total
    this.total = this.cartService.getCartTotal();
  }

  deleteThis(id: number) {
    this.cartService.deletefromCart(id);

    //Updating Total
    this.total = this.cartService.getCartTotal();
  }

  continue() {
    //Continue shopping navigation to Menu
    this.router.navigate(['home']);
  }
  checkout() {
    //CheckOut navigation to payment page
    this.router.navigate(['payment']);
  }
}
