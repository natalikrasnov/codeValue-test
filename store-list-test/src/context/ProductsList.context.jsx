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
    const [displayedProduct, setDisplayedProduct] = useState(null)

    const getProductById = (id) => {
        return products.find(product => product.id === id)
    }
    
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products))
    }, [products])

    return (
        <ProductsListContext.Provider value={{
            products,
            dispatchProducts,
            displayedProduct,
            setDisplayedProduct,
            getProductById
        }}>
            {props.children }
        </ProductsListContext.Provider>
    );
}; 


export default ProductsListContextProvider;