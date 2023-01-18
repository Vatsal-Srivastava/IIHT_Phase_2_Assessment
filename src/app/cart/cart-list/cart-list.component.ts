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
  total: number = 0;
  cartList!: ProductCart[];
  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit(): void {
    this.cartList = this.cartService.getItems();
    this.total = this.cartService.getCartTotal();
  }

  quan_Sub(c: ProductCart) {
    this.cartService.decrementQuantity(c);

    this.total = this.cartService.getCartTotal();
  }
  quan_Add(c: ProductCart) {
    this.cartService.incrementQuantity(c);

    this.total = this.cartService.getCartTotal();
  }

  deleteThis(id: number) {
    this.cartService.deletefromCart(id);

    this.total = this.cartService.getCartTotal();
  }

  continue() {
    this.router.navigate(['home']);
  }
}
