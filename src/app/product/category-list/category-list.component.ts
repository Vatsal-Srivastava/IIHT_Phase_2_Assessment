import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Category } from '../product';
import { ProductState } from 'src/app/state/products/product.state';
import { Store } from '@ngrx/store';
import { loadProducts } from 'src/app/state/products/product.actions';
import { Observable, Subscription } from 'rxjs';
import { Product } from '../product';
import { getProducts } from 'src/app/state/products/product.selectors';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit, OnDestroy {
  constructor(private store: Store<ProductState>) {}

  index = 0;
  subscription!: Subscription;
  filPro!: Product[];
  ele: string = '';
  products!: Product[];
  ngOnInit(): void {
    //loading Product ngrx action
    this.store.dispatch(loadProducts());
    this.subscription = this.store
      .select(getProducts)
      .subscribe((pro: Product[]) => {
        this.products = pro;
        if (this.index == 0) {
          this.filPro = this.products;
        }
      });
    // console.log(this.products);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  category: any[] = [
    'All Products',
    Category.Dairy,
    Category.Beauty,
    Category.Tech,
    Category.Grocery,
    Category.Fruits,
    Category.Veges,
    Category.Clothing,
    Category.Footwear,
    Category.Furniture,
    Category.Appliances,
  ];

  // filterData(cat: string) {
  //   console.log('Enter filter data');
  //   this.filPro = this.products.filter((pro) => {
  //     return pro.category.includes(cat, 0);
  //   });
  // }

  changeTab(event: number) {
    console.log(event);
    setTimeout(() => {
      this.index = event;
    }, 500);
  }

  tabChanged(event: any) {
    this.filPro = this.products;
    const filterText = event.tab.textLabel;

    if (event.index != 0) {
      this.filPro = this.products.filter((pro) => {
        return pro.category.includes(filterText, 0);
      });
    } else {
      this.filPro = this.products;
    }
  }
}
