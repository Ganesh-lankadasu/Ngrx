import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './app.reducers';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

import { CommonService } from './common.service';
import { Product } from 'src/app/product.model';
import { Products } from 'src/app/shared/products.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[Store]
})
export class AppComponent implements OnInit{

  products:Product[];
  subpro;
  subproarray=[];
  
  constructor(private store:Store<fromRoot.State>,
  private comm:CommonService){

    }

    ngOnInit(){

  

      this.comm.getProducts().subscribe((res)=>{
        this.products = res['products'];
        this.products.forEach((product)=>{
          this.subpro = {
            title:product.title,
            price:product.price,
            brand:product.brand,
            category:product.category
          }
          this.store.dispatch(new Products(this.subpro));
        });
      })

      localStorage.removeItem('arrLocal')
    }
    

}
