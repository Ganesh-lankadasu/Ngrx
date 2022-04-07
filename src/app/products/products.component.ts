import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.model';

import * as fromRoot from '../app.reducers'
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { Products, Deleteproducts } from '../shared/products.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[];

  formproducts;

  constructor(private store:Store<fromRoot.State>,
  private router:Router) { }

  ngOnInit(): void {

    this.formproducts = new FormGroup({
      title : new FormControl(''),
      price : new FormControl(''),
      brand : new FormControl(''),
      category : new FormControl('')
    })

    this.gettingproducts();
    
  }

  gettingproducts(){
    this.store.select(fromRoot.getIsproducts).subscribe((res)=>{
      this.products = res;
    })
  }

  addproduct(){
    this.store.dispatch(new Products(this.formproducts.value));
    this.formproducts.reset();
    this.gettingproducts();
  }

  delete(prod){
    console.log(prod);
    this.store.dispatch(new Deleteproducts(prod));
  }

  edit(product){
    this.router.navigate(['/editproducts',product]);
  }
}

