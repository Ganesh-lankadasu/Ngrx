import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { Product } from 'src/app/product.model';
import { Store } from '../../../node_modules/@ngrx/store';
import { Products } from '../shared/products.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  products:Product[]=[];

  constructor(private router:Router,
  private comm:CommonService,
  private store:Store
) { }

  ngOnInit(): void {
  }

}
