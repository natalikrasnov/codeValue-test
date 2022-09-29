import { useContext } from "react";
import { ItemList, DropDown, Search } from "../components";
import { ProductDetails } from "./ProductDetails.component";

import { ProductsListContext } from "../context/ProductsList.context";
import {addProductAction} from '../actions/ProductsList.action'

import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { useEffect } from "react";

export function List({  }) {
    const { products, dispatchProducts } = useContext(ProductsListContext)
    const [filteredData, setFilteredData] = useState([...products])
    
    useEffect(() => {
        setFilteredData([...products])
    }, [products])

    const searchProduct = (e) => {
        const searchBy = e.target.value
        setFilteredData(products.filter((el) =>JSON.stringify(el).includes(searchBy)))
    }

    const sortProducts = (value) => {
        console.log("sort", value)
        const key = value.split(' ').join()
        setFilteredData([...products.sort((el1, el2)=> el1[key] > el2[key]? 1 : -1)])
    }

    const addNewProduct = (e) => {
        e.preventDefault()
        dispatchProducts(addProductAction({
            id: uuidv4(),
            createdDate: Date(),
            name: '',
            description: '',
            price: 0
        }))
    }

    return (
        <div className="list">
            <div className="actions">
                <button className="add" onClick={addNewProduct}>+ Add</button>
                <Search placeholder="search products" onChange={searchProduct} />
                <DropDown onSelect={sortProducts} options={ ["name", "created Date"]} defaultValue="name"/>
            </div>
            <div className="products-content">
                <ItemList data={filteredData} />
                <ProductDetails />
            </div>
            
         </div>
    )
}