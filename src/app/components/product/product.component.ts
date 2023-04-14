import {
  Component,
  Input,
  OnInit,
  OnChanges,
  OnDestroy,
  AfterViewInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit
{
  @Input() product: Product = {
    name: '',
    price: 0,
    available: true,
    img: '',
  };

  constructor() {
    // before render
    // Nada async
    // El constructor solo se monta una vez
    console.log('Constructor montado');
  }

  @Output() addProduct = new EventEmitter<Product>();

  addCard() {
    console.log('ADD CART');
    this.addProduct.emit(this.product);
  }

  ngOnChanges() {
    // before render
    // Actualiza los cambios en los inputs
    // Se actualizará n veces para los @Inputs
    // console.log('ngOnChanges');
  }

  ngOnInit() {
    // before render
    // Async
    // Corre una sola vez
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    // After render
    // Aqui se manejan los hijos
    // console.log('Corre despues del render');
  }

  ngOnDestroy() {
    // console.log('Cuando se elimina el componente');
  }
}
