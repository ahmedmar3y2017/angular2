import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {productComponent} from './products/product.component' ;
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent  ,productComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
