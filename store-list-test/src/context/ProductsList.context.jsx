import React, { createContext, useReducer, useState } from 'react';
import { useEffect } from 'react';

import ActiveProductsListReducer, { ProductsListInitialState  } from '../reducer/ProductsList.reducer';

export const ProductsListContext = createContext();

const ProductsListContextProvider = (props) => {

    const getProducts = () => {
        const stored = localStorage.getItem('products')
        if(!stored) return null
        return JSON.parse(stored) 
    }

    const [products, dispatchProducts] = useReducer(ActiveProductsListReducer, getProducts() || ProductsListInitialState );

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
    }, [products])

    return (
        <ProductsListContext.Provider value={{
            products,
            dispatchProducts
        }}>
            {props.children }
        </ProductsListContext.Provider>
    );
}; 


export default ProductsListContextProvider;