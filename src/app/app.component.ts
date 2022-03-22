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

  products:Product[]=[]
  
  constructor(private store:Store<fromRoot.State>,
  private comm:CommonService){

    }

    ngOnInit(){

      this.comm.getProducts().subscribe((res)=>{
        this.products = res['products'];
        console.log(this.products);
        this.store.dispatch(new Products(this.products))
      })

      localStorage.removeItem('arrLocal')
    }
    

}
