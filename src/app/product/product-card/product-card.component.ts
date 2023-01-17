import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateProduct } from 'src/app/state/products/product.actions';
import { Product } from '../product';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { ProductFormComponent } from '../product-form/product-form.component';
import { FormGroup } from '@angular/forms';
import { getProducts } from 'src/app/state/products/product.selectors';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  constructor(private store: Store, public dialog: MatDialog) {}
  @Input() product!: Product;
  result!: FormGroup;

  updatePro() {
    let product: Product = this.result.value;
    // console.log(product);

    this.store.dispatch(updateProduct({ product }));
    // console.log(this.store.select(getProducts));
  }
  deleteProduct() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      data: {
        product: this.product,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.result = result;
      console.log(this.result);
      // this.updatePro();
    });
  }
}
