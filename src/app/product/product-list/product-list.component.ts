import { Component, OnInit } from '@angular/core';
import { ProductState } from 'src/app/state/products/product.state';
import { Store } from '@ngrx/store';
import { loadProducts } from 'src/app/state/products/product.actions';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { getProducts } from 'src/app/state/products/product.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // @Input() cat_str: string = '';
  constructor(private store: Store<ProductState>) {}
  products: Observable<Product[]> = this.store.select(getProducts);

  // ngOnInit(): void {
  //   this.store.dispatch(loadProducts());
  //   // console.log(this.cat_str);
  // }
}
