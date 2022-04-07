import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditproductsComponent } from './editproducts/editproducts.component';


@NgModule({
  declarations: [
    ProductsComponent,
    EditproductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { 
  constructor(){
    console.log('products module');
  }

  
}
