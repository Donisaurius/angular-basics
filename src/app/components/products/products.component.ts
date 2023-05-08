import { Component } from '@angular/core';
import { switchMap } from 'rxjs';
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
  limit = 10;
  offset = 0;
  statusDetail: 'loading' | 'success' | 'error' = 'success';

  constructor(
    private storeService: StoreService,
    private productService: ProductsService
  ) {
    this.myShoppingCard = storeService.getCard();
  }

  ngOnInit(): void {
    this.loadMore();
  }

  onAddProduct(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: number) {
    this.toggleProductDetail();
    this.productService.getProduct(id).subscribe(
      (data) => {
        this.productChosen = data;
        this.statusDetail = 'success';
      },
      (error) => {
        alert(error);
        this.statusDetail = 'error';
      }
    );
  }

  readAndUpdate(id: number) {
    return (
      this.productService
        .getProduct(id)
        // .pipe(
        //   switchMap((product) =>
        //     this.productService.update(product.id, { title: 'Callback hell' })
        //   )
        // switchMap((product) =>
        //   this.productService.update(product.id, { title: 'Callback hell' })
        // ),
        // switchMap((product) =>
        //   this.productService.update(product.id, { title: 'Callback hell' })
        // ),//* Switch map para hacer el .then, o algo parecido
        // * con el ZIP de rxjs podemos simular el Promise.all
        // !NO COLOCAR ESTE TIPO DE LOGICA EN EL COMPONENTE. LLEVARLO AL SERVICE
        // )
        .subscribe((data) => {
          console.log('data', data);
        })
    );
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

  deleteProduct() {
    const { id } = this.productChosen;

    this.productService.delete(id).subscribe(() => {
      const productsToUpdate = this.products.filter((pr) => pr.id !== id);
      this.products = productsToUpdate;
    });

    this.toggleProductDetail();
  }

  loadMore() {
    this.productService
      .getAllProducts(this.limit, this.offset)
      .subscribe((data) => {
        this.products = this.products.concat(data);
        this.offset += this.limit;
      });
  }
}
