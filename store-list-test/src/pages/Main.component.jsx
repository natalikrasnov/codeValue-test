import {  Header } from "../components";
import ProductsListContextProvider from "../context/ProductsList.context";
import  { MainRouter } from '../router/MainRouter.router'

export function Main() {

    return (
        <div className="main">
            <Header />
            <ProductsListContextProvider>
               <MainRouter />
            </ProductsListContextProvider>
        </div>
    )
}