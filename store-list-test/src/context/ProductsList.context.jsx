import React, { createContext, useReducer } from 'react';

import ActiveProductsListReducer, { ProductsListInitialState  } from '../reducer/ProductsList.reducer';

export const ProductsListContext = createContext();

const ProductsListContextProvider = (props) => {
    const [products, dispatchProducts] = useReducer(ActiveProductsListReducer, ProductsListInitialState );

    return (
        <ProductsListContext.Provider value={ { products, dispatchProducts } }>
            {props.children }
        </ProductsListContext.Provider>
    );
}; 


export default ProductsListContextProvider;