import { NgModule }      from '@angular/core';

import {FormsModule} from '@angular/forms' ;
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {productComponent} from './products/product.component' ;
@NgModule({
  imports:      [ BrowserModule , FormsModule ],
  declarations: [ AppComponent  ,productComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
