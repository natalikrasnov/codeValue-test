import { useState } from "react";
import { List, Header } from "../components";
import { ProductDetails } from "./ProductDetails.component";

export function Main() {

    const [displayedProduct, setDisplayedProduct] = useState(null)

    const displayProductDetails = (id) => {
        //get product by id 
        setDisplayedProduct(id)
        console.log("selected", id)
    }

    return (
        <div className="main">
            <Header />
            <div className="content">
                <List onItemSelected={displayProductDetails}/>
                {
                    displayedProduct &&
                    <ProductDetails
                    />
                }
            </div>
        </div>
    )
}