import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1><app-product></app-product> Hello man {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }
