import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth-guard.service';
import { CartListComponent } from './cart-list/cart-list.component';

const cartRoutes: Routes = [
  { path: 'cart', component: CartListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(cartRoutes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
