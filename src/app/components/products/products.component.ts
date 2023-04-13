import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  products: Product[] = [
    {
      name: 'TicToc',
      price: 0.5,
      img: 'https://www.freecodecamp.org/espanol/news/content/images/2022/02/5f9c9a4c740569d1a4ca24c2.jpg',
    },
    {
      name: 'Justy',
      price: 0.8,
      img: 'https://www.freecodecamp.org/espanol/news/content/images/2022/02/5f9c9a4c740569d1a4ca24c2.jpg',
      available: true,
    },
    {
      name: 'Pan',
      price: 1.5,
      img: 'https://www.freecodecamp.org/espanol/news/content/images/2022/02/5f9c9a4c740569d1a4ca24c2.jpg',
      available: false,
    },
    {
      name: 'Jugo Premium',
      price: 10.5,
      img: 'https://www.freecodecamp.org/espanol/news/content/images/2022/02/5f9c9a4c740569d1a4ca24c2.jpg',
      available: false,
    },
    {
      name: 'Club Social',
      price: 1.5,
      img: 'https://www.freecodecamp.org/espanol/news/content/images/2022/02/5f9c9a4c740569d1a4ca24c2.jpg',
      available: true,
    },
    {
      name: 'Avena',
      price: 1.5,
      img: 'https://www.freecodecamp.org/espanol/news/content/images/2022/02/5f9c9a4c740569d1a4ca24c2.jpg',
      available: true,
    },
  ];
}
