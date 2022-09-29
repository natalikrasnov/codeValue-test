import { List, Header } from "../components";
import ProductsListContextProvider from "../context/ProductsList.context";
import { ProductDetails } from "./ProductDetails.component";

export function Main() {

    return (
        <div className="main">
            <Header />
            <ProductsListContextProvider>
                    <List />
            </ProductsListContextProvider>
        </div>
    )
}