import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Product } from '../product/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'api/products/';
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProductById(proId: number): Observable<Object> {
    let proObj = this.http.get(`${this.url}/${proId}`);
    if (proObj) {
      return new Observable((obj) => {
        obj.next(proObj);
        obj.complete();
      });
    } else {
      return new Observable((obj) => {
        obj.error('Product with Id: ' + proId + ' .Not Found!');
      });
    }
  }

  createProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http.post<Product>(this.url, product, { headers }).pipe(
      tap((data) => console.log(data)),
      catchError(this.errorHandler)
    );
  }

  updateProduct(pro: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http.put<Product>(this.url, pro, { headers }).pipe(
      tap((data) => console.log(data)),
      catchError(this.errorHandler)
    );
  }

  public deleteProduct(proId: number) {
    return this.http.delete(`${this.url}/${proId}`);
  }

  private errorHandler(err: any) {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured ${err.error.message}`;
    } else {
      errorMessage = `Backend returned code ${err.status} ${err.body.error}`;
    }
    console.log(err);
    return throwError(errorMessage);
  }
}
