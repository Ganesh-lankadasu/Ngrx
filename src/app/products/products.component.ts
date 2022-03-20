import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';

import * as fromRoot from '../app.reducers'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[];

  constructor(private store:Store<fromRoot.State>) { }

  ngOnInit(): void {

    this.store.select(fromRoot.getIsproducts).subscribe((res)=>{
      this.products = res['0'];
    })
  }
}

