import { Product } from 'src/app/product.model';
import { ADDPRODUCTS, DELETE, UPDATEPRODUCT } from 'src/app/shared/products.action';

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

        case DELETE :

        return {
            ...state,
            products:[...state.products.filter((name)=>{
                return name.title !== action.payload;
            })]

        }

        case UPDATEPRODUCT :

        const productindex = state.products.findIndex((name)=>{
            console.log(name.title)
            return name.title === action.payload.title;
        });

        const prod = action.payload.product;

        const prro = [...state.products];
        prro.splice(productindex,1,prod);

        


        return {
            ...state,
            products:prro
        }

        return {
            ...state,
    

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

export const getIsproducted =(state:State,action)=>{
    return state.products.filter((res)=>{
        return res.title === action.payload;
    })
}