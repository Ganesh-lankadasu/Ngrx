import { Injectable, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject, Observable, BehaviorSubject, AsyncSubject, ReplaySubject } from 'rxjs';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Product } from 'src/app/product.model';

@Injectable()
export class CommonService implements OnInit {

  arrreply:any[]=[];

  public sub$ = new ReplaySubject();

  constructor(private http:HttpClient) { 
    this.sub$.subscribe((res)=>{
      console.log(res);
    })
  }

  ngOnInit(){
  }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>('https://dummyjson.com/products')
  }


}
