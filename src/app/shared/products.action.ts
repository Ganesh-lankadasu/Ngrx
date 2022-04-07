import { Action } from '@ngrx/store';
import { Product } from 'src/app/product.model';


export const ADDPRODUCTS = '[products] store the products';

export const DELETE = 'delete the products';

export const UPDATEPRODUCT ='Updating the product'



export class Products implements Action {
    readonly type = ADDPRODUCTS;

    constructor(public payload:Product[]){

    }
}

export class Deleteproducts implements Action {
    readonly type = DELETE;

    constructor(public payload){

    }
}

export class Updateproduct implements Action {
    readonly type = UPDATEPRODUCT;

    constructor(public payload:{title,product}){}
}


export type productsAction = Products | Deleteproducts | Updateproduct

