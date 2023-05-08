import { Component } from '@angular/core';
import {
  CreateProductDTO,
  Product,
  UpdateProductDTO,
} from 'src/app/models/product.model';
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
  showProductDetail = false;
  productChosen: Product = {
    id: 0,
    title: '',
    price: 0,
    available: true,
    images: [],
    category: {
      id: 0,
      name: '',
      typeImg: '',
    },
    description: '',
  };

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

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: number) {
    this.productService.getProduct(id).subscribe((data) => {
      this.toggleProductDetail();
      this.productChosen = data;
    });
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'Nuevo producto',
      description: 'nuevo',
      price: 200,
      images: ['a'],
      categoryId: 2,
    };

    this.productService.create(product).subscribe((data) => {
      this.products.unshift(data);
    });
  }

  updateProduct() {
    const changes: UpdateProductDTO = {
      title: 'New title',
    };

    const { id } = this.productChosen;

    this.productService.update(id, changes).subscribe((data) => {
      const productsToUpdate = this.products.filter((pr) => pr.id !== id);
      productsToUpdate.unshift(data);
      this.products = productsToUpdate;
    });
  }
}
