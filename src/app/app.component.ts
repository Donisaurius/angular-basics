import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'my-store';
  name = 'Adonis';
  age = 23;
  // private age = 23; !**Para indicar que sea privada
  image =
    'https://www.freecodecamp.org/espanol/news/content/images/2022/02/5f9c9a4c740569d1a4ca24c2.jpg';
  btnDisabled = true;
  person = {
    name: 'Daniel',
    age: 23,
    hobby: 'draw',
  };
  nameActive = false;
  lyrics = '';
  kimetsus: string[] = ['tanjiro', 'ino', 'zeni'];
  newName = '';
  products: Product[] = [];
  register = {
    name: '',
    email: '',
    password: '',
  };

  inputParent: string = '';
  sonImage: string = '';

  showName() {
    this.nameActive = !this.nameActive;
  }

  plusAge() {
    this.age++;
  }

  onScroll(e: Event) {
    const el = e.target as HTMLElement;
    console.log(el.scrollTop);
  }

  handleChange(e: Event) {
    const el = e.target as HTMLInputElement;
    this.lyrics = el.value;
  }

  addName() {
    this.kimetsus.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.kimetsus.splice(index, 1);
  }

  handleRegister(e: Event) {
    const el = e.target as HTMLFormElement;
    e.preventDefault();
    console.log(this.register);
  }

  onLoaded(img: string) {
    this.sonImage = img;
  }
}
