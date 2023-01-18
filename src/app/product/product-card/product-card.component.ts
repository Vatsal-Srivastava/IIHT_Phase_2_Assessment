import { Component, EventEmitter, Input, Output, DoCheck } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  deleteProduct,
  loadProducts,
  updateProduct,
} from 'src/app/state/products/product.actions';
import { Category, Product } from '../product';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ProductFormComponent } from '../product-form/product-form.component';
import { FormGroup } from '@angular/forms';
import { getProducts } from 'src/app/state/products/product.selectors';
import { Observable } from 'rxjs';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { CartService } from 'src/app/services/cart.service';
import { ProductCart } from '../product-cart';
import { User } from 'src/app/user/user';
import { getCurrUser } from 'src/app/state/users/user.selectors';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements DoCheck {
  CurrUser!: User | null;
  isAdmin: boolean = false;

  ngDoCheck(): void {
    // console.log('do check');
    this.CurrUser = JSON.parse(sessionStorage.getItem('curr') || '{}');
    // console.log(this.CurrUser);

    if (this.CurrUser?.isAdmin) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }
  constructor(
    private store: Store,
    public dialog: MatDialog,
    private cartService: CartService
  ) {}
  @Input() product!: Product;
  @Output() ind: EventEmitter<number> = new EventEmitter();
  result!: Product;
  delString!: string;
  // updOb: Observable<Product[]> = this.store.select(getProducts);
  catList: any[] = [
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

  updatePro() {
    // console.log(this.result);

    let product: Product = this.result;
    // console.log(product);

    this.store.dispatch(updateProduct({ product }));
    this.store.dispatch(loadProducts());
    this.ind.emit(this.catList.indexOf(product.category));
  }
  deleteProduct() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      width: '50%',
      data: {
        product: this.product,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.result = result;
        console.log(typeof result);
        this.updatePro();
      } else {
        console.log('The dialog was closed');
      }
    });
  }

  deleteDialog() {
    const dialogRefer = this.dialog.open(ConfirmDeleteComponent, {
      width: '50%',
      data: {
        product: this.product,
      },
    });

    dialogRefer.afterClosed().subscribe((result) => {
      // console.log(result);
      if (result) {
        this.store.dispatch(deleteProduct({ pid: this.product.id }));
        // this.store.select(loadProducts);
        this.ind.emit(0);
      }
    });
  }

  addToCart() {
    let cartItem: ProductCart = {
      id: this.product.id,
      name: this.product.name,
      price: this.product.price,
      quantity: 1,
      img: this.product.img,
      uprice: this.product.price,
    };
    this.cartService.addToCart(cartItem);
  }
}
