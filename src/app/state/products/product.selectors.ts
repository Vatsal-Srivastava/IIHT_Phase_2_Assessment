import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState } from './product.state';

export const getProductFeature =
  createFeatureSelector<ProductState>('products');

export const getCurrentProduct = createSelector(
  getProductFeature,
  (state) => state.currProduct
);

export const getProducts = createSelector(
  getProductFeature,
  (state) => state.products
);

export const getError = createSelector(
  getProductFeature,
  (state) => state.error
);

export const getStatus = createSelector(
  getProductFeature,
  (state) => state.status
);
