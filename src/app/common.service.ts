import { Injectable, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Product } from 'src/app/product.model';

@Injectable()
export class CommonService implements OnInit {

  constructor(private http:HttpClient) { 
  }

  ngOnInit(){

  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('https://dummyjson.com/products')
  }


}
