import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  paymentForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.paymentForm = this.fb.group({
      num: ['', [Validators.required]],
      date: ['', [Validators.required]],
      cvv: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
  }

  submitPay() {
    this.cartService.clearCart();
    alert('Order Placed');
    this.router.navigate(['home']);
  }
}
