import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('Should Add to cart ', ()=>{});
  // it('Should Delete From cart ');
});
