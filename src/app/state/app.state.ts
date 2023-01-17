import { ProductState } from './products/product.state';
import { UserState } from './users/user.state';

export interface AppState {
  users: UserState;
  products: ProductState;
}
