
import { createFeatureSelector, createSelector } from '@ngrx/store';



import * as fromproducts from './shared/products.reducer';


export interface State{
    products:fromproducts.State
}

export const reducers={
    products:fromproducts.productsreducer
}

export const getproductsState = createFeatureSelector<fromproducts.State>('products');

export const getIsproducts = createSelector(getproductsState,fromproducts.getIsproducts);

