import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category, Product } from '../product';

import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { getProducts } from 'src/app/state/products/product.selectors';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  productForm!: FormGroup;
  productList!: Product[];
  subs!: Subscription;
  categoryList: any[] = [
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
  constructor(
    private store: Store,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CreateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.subs = this.store.select(getProducts).subscribe((val) => {
      console.log(val);
      this.productList = val;
    });
    this.productForm = this.fb.group({
      id: [
        this.productList[this.productList.length - 1].id + 1,
        [Validators.required],
      ],
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required]],
      category: ['', [Validators.required]],
      rating: ['', [Validators.required]],
    });
  }

  get id() {
    return this.productForm.get('id')?.value;
  }

  get name() {
    return this.productForm.get('name')?.value;
  }

  get price() {
    return this.productForm.get('price')?.value;
  }

  get category() {
    return this.productForm.get('category')?.value;
  }

  get rating() {
    return this.productForm.get('rating')?.value;
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  create() {
    let pro: Product = {
      id: this.id,
      name: this.name,
      price: this.price,
      img: '../../../assets/images/temp.jpeg',
      category: this.category,
      rating: this.rating,
      quantity: 0,
    };
    this.dialogRef.close(pro);
  }
}
