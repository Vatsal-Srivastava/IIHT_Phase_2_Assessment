import { Product } from 'src/app/product/product';

export interface ProductState {
  currProduct: {};
  products: Product[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}
