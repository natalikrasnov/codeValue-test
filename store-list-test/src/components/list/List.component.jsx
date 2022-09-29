import { useState } from "react";
import { ItemList } from "./ItemList.component";
import { DropDown } from '../DropDown.component'
import { Search } from "../Search.component";

export function List({ onItemSelected }) {

    const searchProduct = (e) => {
        console.log("search",e.target.value)    
    }

    const sortProducts = (value) => {
        console.log("sort", value)
    }

    const addNewProduct = (e) => {
        e.preventDefault()
        
    }

    return (
        <div className="list">
            <div className="actions">
                <button className="add">+ Add</button>
                <Search placeholder="search products" onChange={searchProduct} />
                <DropDown onSelect={sortProducts} options={ ["name", "created Date"]} defaultValue="name"/>
            </div>
            <ItemList onItemSelected={onItemSelected} />
         </div>
    )
}