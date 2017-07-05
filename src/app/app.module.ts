import { NgModule }      from '@angular/core';

import {FormsModule} from '@angular/forms' ;
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {productComponent} from './products/product.component' ;
import { basicpipe } from './shared/pipes/basic.pipe';
import { filterPipe } from './shared/pipes/filter.pipe';
@NgModule({
  imports:      [ BrowserModule , FormsModule ],
  declarations: [ AppComponent  ,productComponent ,basicpipe , filterPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
