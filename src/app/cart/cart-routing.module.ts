import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const cartRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(cartRoutes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
