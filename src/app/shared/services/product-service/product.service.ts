import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../../models/product';
import {environment} from '../../../../environments/environment';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.apiUrl + 'products';
  filter: string;
  properType = 'Available Products';
  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url + '?' + this.filter).pipe(take(1));
  }
  getProductByID(id: number): Observable<Product> {
    return this.http.get<Product>(this.url + '/' + id).pipe(take(1));
  }
  createProduct(product: Product): Observable<any> {
    // @ts-ignore
    return this.http.post<Product>(this.url,  product, {responseType: 'text'}).pipe(take(1));
  }
  updateProduct(product: Product): Observable<any> {
    // @ts-ignore
    return this.http.put<Product>(this.url + '/' + product.id, product, {responseType: 'text'}).pipe(take(1));
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.url + '/' + id, {responseType: 'text'}).pipe(take(1));
  }
  setFilter(filter: string, properType: string) {
    this.filter = filter;
    this.properType = properType;
  }
}
