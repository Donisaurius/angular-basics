import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private products: Product[] = [];

  constructor() {}

  addProduct(product: Product) {
    this.products.push(product);
  }

  getCard() {
    return this.products;
  }

  getTotal() {
    return this.products.reduce((sum, item) => sum + item.price, 0);
  }
}
