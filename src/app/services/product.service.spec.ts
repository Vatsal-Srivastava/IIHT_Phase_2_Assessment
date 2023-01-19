import { inject, TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

import { HttpEvent, HttpEventType } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Category, Product } from '../product/product';

describe('ProductService', () => {
  let service: ProductService;
  let url = 'api/products/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Products', inject(
    [HttpTestingController, ProductService],
    (httpMock: HttpTestingController, service: ProductService) => {
      let p: Product[] = [
        {
          id: 80,
          name: 'Apples',
          price: 200,
          category: Category.Fruits,
          rating: 5,
          img: '../assets/images/apple.jpeg',
          quantity: 0,
        },
      ];
      service.getProducts().subscribe((products) => {
        expect(p).toEqual(products);
      });
      const mockRequest = httpMock.expectOne('api/products/');
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(p);
      httpMock.verify();
    }
  ));

  it('should create Products', inject(
    [HttpTestingController, ProductService],
    (httpMock: HttpTestingController, service: ProductService) => {
      let p: Product = {
        id: 80,
        name: 'Apples',
        price: 200,
        category: Category.Fruits,
        rating: 5,
        img: '../assets/images/apple.jpeg',
        quantity: 0,
      };
      service.createProduct(p).subscribe((products) => {
        expect(p).toEqual(products);
      });
      const mockRequest = httpMock.expectOne('api/products/');
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(p);
      httpMock.verify();
    }
  ));

  it('should update Products', inject(
    [HttpTestingController, ProductService],
    (httpMock: HttpTestingController, service: ProductService) => {
      let p: Product = {
        id: 80,
        name: 'Apples',
        price: 200,
        category: Category.Fruits,
        rating: 5,
        img: '../assets/images/apple.png',
        quantity: 0
      };
      service.updateProduct(p).subscribe((products) => {
        expect(p).toEqual(products);
      });
      const mockRequest = httpMock.expectOne(`${url}/${p.id}`);
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(p);
      httpMock.verify();
    }
  ));
  it('should delete Products', inject(
    [HttpTestingController, ProductService],
    (httpMock: HttpTestingController, service: ProductService) => {
      let id = 1;
      service.deleteProduct(id).subscribe((products: any) => {
        expect(1).toEqual(products);
      });
      const mockRequest = httpMock.expectOne(`${url}/${id}`);
      expect(mockRequest.cancelled).toBeFalsy();
      expect(mockRequest.request.responseType).toEqual('json');
      mockRequest.flush(id);
      httpMock.verify();
    }
  ));
});
