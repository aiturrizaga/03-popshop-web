import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  productSelected: IProduct = {};

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products');
  }

  findById(id: number) {
    return this.http.get<IProduct>('https://fakestoreapi.com/products/' + id);
  }

  register(product: IProduct) {
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product);
  }
}
