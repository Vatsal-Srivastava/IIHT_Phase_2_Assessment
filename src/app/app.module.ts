import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './state/users/user.effects';
import { userReducer } from './state/users/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDbMartService } from './inmemorydbmartservice';
import { ProductEffects } from './state/products/product.effects';
import { productReducer } from './state/products/product.reducer';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDbMartService),
    HttpClientModule,
    ProductModule,
    UserModule,
    CartModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('users', userReducer),
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forRoot([UserEffects, ProductEffects]),
  ],
})
export class AppModule {}
