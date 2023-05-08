import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
} from '../models/product.model';
import { catchError, map, retry, throwError } from 'rxjs';

import { enviroment } from '../../enviroments/enviroments';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = `${enviroment.API_URL}/api/products`;

  constructor(private http: HttpClient) {}

  getAllProducts(limit?: number, offset?: number) {
    let params = new HttpParams();

    if (limit && typeof offset !== 'undefined') {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http
      .get<Product[]>(this.apiUrl, {
        params,
      })
      .pipe(
        retry(3),
        map((products) =>
          products.map((item) => {
            return {
              ...item,
              taxes: item.price * 0.16,
            };
          })
        )
      ); //* Tambien retryWhen para condicionar
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`).pipe(
      catchError(() => {
        return throwError('Ups ocurrió un error');
      })
    );
  }

  create(product: CreateProductDTO) {
    return this.http.post<Product>(`${this.apiUrl}`, product);
  }

  update(id: number, product: UpdateProductDTO) {
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  delete(id: number) {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
