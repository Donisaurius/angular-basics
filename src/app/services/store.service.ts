import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private products: Product[] = [];
  // observable
  private myCar = new BehaviorSubject<Product[]>([]);

  // algoCon$ al final es un observable
  myCar$ = this.myCar.asObservable();

  constructor() {}

  addProduct(product: Product) {
    this.products.push(product);
    this.myCar.next(this.products);
  }

  getCard() {
    return this.products;
  }

  getTotal() {
    return this.products.reduce((sum, item) => sum + item.price, 0);
  }
}
