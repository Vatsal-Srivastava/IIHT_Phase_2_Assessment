import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Category, Product } from './product/product';
import { User } from './user/user';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDbMartService implements InMemoryDbService {
  createDb(
    reqInfo?: RequestInfo | undefined
  ): {} | Observable<{}> | Promise<{}> {
    let products: Product[] = [
      {
        id: 1,
        name: 'Milk',
        price: 50,
        img: '../../assets/milk.jpg',
        category: Category.Dairy,
        rating: 3.7,
        quantity: 0,
      },
      {
        id: 2,
        name: 'Lipstick',
        price: 100,
        img: '../../assets/lipstick.jpg',
        category: Category.Beauty,
        rating: 2,
        quantity: 0,
      },
      {
        id: 3,
        name: 'Mobile',
        price: 5000,
        img: '../../assets/mobile.jpg',
        category: Category.Tech,
        rating: 3,
        quantity: 0,
      },
      {
        id: 4,
        name: 'Biscuit',
        price: 50,
        img: '../../assets/biscuit.jpg',
        category: Category.Grocery,
        rating: 1.7,
        quantity: 0,
      },
      {
        id: 5,
        name: 'Curd',
        price: 20,
        img: '../../assets/curd.jpg',
        category: Category.Dairy,
        rating: 4.2,
        quantity: 0,
      },
      {
        id: 6,
        name: 'Maggie',
        price: 24,
        img: '../../assets/maggie.jpg',
        category: Category.Grocery,
        rating: 3,
        quantity: 0,
      },
    ];

    let users: User[] = [
      { id: 1, userName: 'Vatsal', isAdmin: true, password: 'vatsal' },
      { id: 2, userName: 'Anish', isAdmin: false, password: 'vatsal' },
      { id: 3, userName: 'Ayush', isAdmin: false, password: 'vatsal' },
      { id: 4, userName: 'Vedic', isAdmin: false, password: 'vatsal' },
    ];
    return { products, users };
  }
}
