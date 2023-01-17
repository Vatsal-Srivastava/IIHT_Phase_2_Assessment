import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/product/product';

//Load all product actions
export const loadProducts = createAction('[Product] Load all Products');

export const loadProductsSuccess = createAction(
  '[Product] Products load Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Products load Failed',
  props<{ error: string }>()
);

//Create Products
export const createProduct = createAction(
  '[Product] Create Product',
  props<{ product: Product }>()
);

export const createProductSuccess = createAction(
  '[Product] Creating Product Success',
  props<{ product: Product }>()
);

export const createProductFailure = createAction(
  '[Product] Creating Product Fail',
  props<{ error: string }>()
);

//Update a product action
export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: Product }>()
);

export const updateProductSuccess = createAction(
  '[Product] Updating Product Success',
  props<{ product: Product }>()
);

export const updateProductFailure = createAction(
  '[Product] Updating Product Fail',
  props<{ error: string }>()
);

//Delete a product action
export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ pid: number }>()
);

export const deleteProductSuccess = createAction(
  '[Product] Deleting Product Success',
  props<{ pid: number }>()
);

export const deleteProductFailure = createAction(
  '[Product] Deleting Product Fail',
  props<{ error: string }>()
);
