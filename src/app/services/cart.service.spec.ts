import { TestBed } from '@angular/core/testing';
import { ProductCart } from '../product/product-cart';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;
  let dummyPro: ProductCart;
  let dummyPro1: ProductCart;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
    dummyPro = {
      id: 999,
      name: 'Apple',
      price: 60,
      uprice: 60,
      quantity: 1,
      img: '...//../',
    };
    dummyPro1 = {
      id: 1000,
      name: 'Apple',
      price: 60,
      uprice: 60,
      quantity: 1,
      img: '...//../',
    };
  });

  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should Add to cart ', () => {
    service.addToCart(dummyPro);
    expect(service.items).toEqual([dummyPro]);
  });

  it('Should Delete From cart ', () => {
    service.addToCart(dummyPro);
    service.addToCart(dummyPro1);
    console.log(service.items);
    service.deletefromCart(dummyPro.id);

    expect(service.items).toEqual([dummyPro1]);
  });

  it('Shoud Get Items', () => {
    service.addToCart(dummyPro);
    service.addToCart(dummyPro1);
    expect(service.getItems().length).toEqual(2);
  });
});
