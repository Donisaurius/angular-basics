import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { StoreService } from 'src/app/services/store.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  myShoppingCard: Product[] = [];
  total = 0;
  products: Product[] = [];
  today = new Date();
  date = new Date(2023, 3, 2);

  constructor(
    private storeService: StoreService,
    private productService: ProductsService
  ) {
    this.myShoppingCard = storeService.getCard();
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  onAddProduct(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
