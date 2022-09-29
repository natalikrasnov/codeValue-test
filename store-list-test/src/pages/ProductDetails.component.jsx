import { useState } from "react"
import { useEffect } from "react"
import { useContext } from "react"
import { ProductsListContext } from "../context/ProductsList.context"
import {saveProductAction} from '../actions/ProductsList.action'

export function ProductDetails() {
    const { displayedProduct, getProductById , dispatchProducts} = useContext(ProductsListContext)
    const productData = displayedProduct ? getProductById(displayedProduct) : null
    
    const [nameInput, setNameInput] = useState(productData ? productData.name : '')
    const [descriptionInput, setDescriptionInput] = useState(productData ? productData.description : '')
    const [priceInput, setPriceInput] = useState(productData ? productData.price : '')

    useEffect(() => {
        if(!productData) return
        setNameInput(productData.name )
        setDescriptionInput(productData.description)
        setPriceInput(productData.price)
    }, [productData])
    
    const checkValidation = () => {
        let errorMessage = ""
        if (nameInput.length < 30) errorMessage += " Name too short! "
        if (priceInput <= 0) errorMessage += " Price not valid! "
        if (errorMessage != '') alert(errorMessage)
        return errorMessage === ''
    }

    const saveProduct = (e) => {
        e.preventDefault()
        if(!checkValidation()) return

        productData.name = nameInput
        productData.description = descriptionInput
        productData.price = priceInput

        dispatchProducts(saveProductAction({ ...productData }))
        
        alert("updated!")
    }

    return (
        productData && <div className="product-details">
            <label className="title">{ productData.name }</label>
            <form >
                <img src="https://media.istockphoto.com/vectors/resume-vector-icon-vector-id1220378015?k=20&m=1220378015&s=612x612&w=0&h=ts6kW0hZO67AssBX_A9Jrfio8ZrIlK2q2AhwpcWqF4A=" />
                <label>
                    Name
                    <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                </label>
                <label>
                    Description
                    <textarea rows={5} value={descriptionInput} onChange={(e) => setDescriptionInput(e.target.value)} />
                </label>
                <label>
                    price
                    <input value={priceInput} onChange={(e) => setPriceInput(e.target.value)} />
                    $
                </label>
                <button className="save" type="submit" onClick={saveProduct}>Save</button>
            </form>
        </div>
    )
}