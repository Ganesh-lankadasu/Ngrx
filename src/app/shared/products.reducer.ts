import { Product } from 'src/app/product.model';
import { ADDPRODUCTS } from 'src/app/shared/products.action';

import * as fromProducts from '../shared/products.action'


export interface State{
    products:Product[]
}

export const initialstate:State = {
    products:[]
}


export function productsreducer(state=initialstate,action:fromProducts.productsAction){
    switch(action.type) {

        case ADDPRODUCTS :
        return {
            ...state,
            products:[...state.products,action.payload]
            
        }

        default :
        {
            return state
        }
    }
}

export const getIsproducts =(state:State)=>{
    return state.products
}