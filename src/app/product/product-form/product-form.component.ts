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
  id1: number;
  name1: string;
  price1: number;
  category1: Category;
  rating1: number;
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
  ) {
    this.id1 = this.data.product.id;
    this.name1 = this.data.product.name;
    this.price1 = this.data.product.price;
    this.category1 = this.data.product.category;
    this.rating1 = this.data.product.rating;
  }
  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: [this.id1, [Validators.required]],
      name: [this.name1, [Validators.required, Validators.minLength(3)]],
      price: [this.price1, [Validators.required]],
      category: [this.category1, [Validators.required]],
      rating: [this.rating1, [Validators.required]],
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
