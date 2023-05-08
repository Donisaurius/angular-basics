import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
} from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  create(product: CreateProductDTO) {
    return this.http.post<Product>(`${this.apiUrl}`, product);
  }

  update(id: number, product: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }
}
