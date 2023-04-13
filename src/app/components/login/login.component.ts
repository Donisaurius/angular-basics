import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Input() name: string = '';

  @Output() loaded = new EventEmitter<string>();

  sendDataToFather() {
    console.log('LCIK');
    this.loaded.emit(this.name);
  }
}
