import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducers'
import { FormGroup, FormControl } from '../../../../node_modules/@angular/forms';
import { Updateproduct } from '../../shared/products.action';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-editproducts',
  templateUrl: './editproducts.component.html',
  styleUrls: ['./editproducts.component.css']
})
export class EditproductsComponent implements OnInit {

  formproduct;
  productname;

  constructor(private route:ActivatedRoute,
  private store:Store<fromRoot.State>,
private router:Router) { }

  ngOnInit(): void {


    

    this.formproduct = new FormGroup({
      title : new FormControl(''),
      price : new FormControl(''),
      brand : new FormControl(''),
      category : new FormControl('')
    })

    this.route.params.subscribe((res)=>{
      this.productname = res.title;
      this.formproduct.setValue(res);
    })

  }

  edit(){
    
    const data :{
      title:string,
      product:Product[]
    } = {
      title:this.productname,
      product:this.formproduct.value
    }
    this.store.dispatch(new Updateproduct(data));
    this.router.navigate(['/products']);
  }

  back(){
    this.router.navigate(['/products']);
  }

}
