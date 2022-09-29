import { useContext } from "react";
import {  DropDown, Search, ItemList } from "../components";

import { ProductsListContext } from "../context/ProductsList.context";

import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { ProductDetails } from "./ProductDetails.component";

const sortObject = {
    createdDate: "created date",
    name: "name"
}

const itemsInPage = 5

export function List({ }) {
    const navigate = useNavigate()

    const { products} = useContext(ProductsListContext)
    const [filteredData, setFilteredData] = useState([...products])
    const [currentPage, setCurrentPage] = useState(1)
    
    useEffect(() => {
        setFilteredData([...products])
    }, [products])

    const searchProduct = (e) => {
        const searchBy = e.target.value
        setFilteredData(products.filter((el) =>JSON.stringify(el).includes(searchBy)))
    }

    const sortProducts = (key) => {
        console.log("sort", key)
        setFilteredData([...products.sort((el1, el2)=> el1[key] > el2[key]? 1 : -1)])
    }

    const addNewProduct = (e) => {
        e.preventDefault()
        const newProduct = {
            id: uuidv4(),
            createdDate: Date(),
            name: '',
            description: '',
            price: 0
        }
       navigate('/products/'+newProduct.id, {state: {productData: newProduct}})
    }

    const sumPages = parseInt(filteredData.length / itemsInPage)+ (filteredData.length % itemsInPage == 0 ? 0 : 1) 
    
    const getDataPage = filteredData.slice((currentPage-1)*itemsInPage , (currentPage-1)*itemsInPage +itemsInPage )

    const onPrevClick = () => {
        setCurrentPage(currentPage-1)
    }
    const onNextClick = () => {
        setCurrentPage(currentPage+1)
    }
    return (
        <div className="list">
            <div className="actions">
                <button className="add" onClick={addNewProduct}>+ Add</button>
                <Search placeholder="search products" onChange={searchProduct} />
                <DropDown onSelect={sortProducts} options={sortObject} defaultValue={ sortObject.name } />
            </div>
            <div className="products-content">
                <ItemList data={getDataPage} />
                <ProductDetails />
            </div>
            <div className="pagination">
                {currentPage > 1 && <a className="prev" onClick={onPrevClick}> ◀ prev Page</a>}
                <label>{currentPage} of { sumPages }</label>
                {currentPage < sumPages && <a className="next" onClick={onNextClick}> next Page ▶ </a>}
            </div>
         </div>
    )
}