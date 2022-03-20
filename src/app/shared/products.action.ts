import { Action } from '@ngrx/store';
import { Product } from 'src/app/product.model';


export const ADDPRODUCTS = '[products] store the products';

export class Products implements Action {
    readonly type = ADDPRODUCTS;

    constructor(public payload:Product[]){

    }
}

export type productsAction = Products;

