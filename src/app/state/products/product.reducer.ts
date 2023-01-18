import { createReducer, on } from '@ngrx/store';
import {
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
  createProduct,
  createProductFailure,
  createProductSuccess,
  updateProduct,
  updateProductFailure,
  updateProductSuccess,
  deleteProduct,
  deleteProductFailure,
  deleteProductSuccess,
} from './product.actions';
import { ProductState } from './product.state';

export const initialState: ProductState = {
  currProduct: {},
  products: [],
  error: '',
  status: 'pending',
};

export const productReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({
    ...state,
    status: 'loading',
  })),
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    error: '',
    status: 'success',
  })),
  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(createProduct, (state, { product }) => ({
    ...state,
    currProduct: product,
    status: 'loading',
  })),
  on(createProductSuccess, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
    currProduct: product,
    error: '',
    status: 'success',
  })),
  on(createProductFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),
  on(updateProduct, (state, { product }) => ({
    ...state,
    currProduct: product,
    status: 'loading',
  })),
  on(updateProductSuccess, (state, { product }) => ({
    ...state,
    currProduct: product,
    error: '',
    status: 'success',
  })),
  // on(updateProductSuccess, (state, action): ProductState => {
  //   const updatedProducts = state.products.map((item) =>
  //     action.product.id === item.id ? action.product : item
  //   );
  //   return {
  //     ...state,
  //     products: updatedProducts,
  //     currProduct: action.product,
  //     error: '',
  //   };
  // }),
  on(updateProductFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  })),

  on(deleteProduct, (state, { pid }) => ({
    ...state,
    status: 'loading',
  })),
  on(deleteProductSuccess, (state, { pid }) => ({
    ...state,
    products: state.products.filter((ele) => ele.id !== pid),
    error: '',
    status: 'success',
  })),
  on(deleteProductFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
