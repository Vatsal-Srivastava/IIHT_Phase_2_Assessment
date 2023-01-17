import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category, Product } from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  categoryList: any[] = [
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
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [this.data.product.id, [Validators.required]],
      name: [
        this.data.product.name,
        [Validators.required, Validators.minLength(3)],
      ],
      price: [this.data.product.price, [Validators.required]],
      category: [this.data.product.category, [Validators.required]],
      rating: [this.data.product.rating, [Validators.required]],
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
    this.dialogRef.close();
  }

  update() {
    let pro: Product = {
      id: this.id,
      name: this.name,
      price: this.price,
      img: this.data.product.img,
      category: this.category,
      rating: this.rating,
      quantity: 0,
    };
    this.dialogRef.close(pro);
  }
}