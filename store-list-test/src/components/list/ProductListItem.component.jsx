import { useContext } from "react"
import { ProductsListContext } from "../../context/ProductsList.context"
import { deleteProductAction} from '../../actions/ProductsList.action'

export function ProductListItem({
    img = "https://media.istockphoto.com/vectors/resume-vector-icon-vector-id1220378015?k=20&m=1220378015&s=612x612&w=0&h=ts6kW0hZO67AssBX_A9Jrfio8ZrIlK2q2AhwpcWqF4A=",
    name,
    description,
    id
}) {

    const { dispatchProducts, setDisplayedProduct } = useContext(ProductsListContext)
    
    const deleteItem = (e) => {
        console.log("delete")
        e.preventDefault()
        dispatchProducts(deleteProductAction(id))
    }

    
    return (
        <div className="product-list-item" onClick={()=> setDisplayedProduct(id) }>
            <img src={img} />
            <div className="name-desc">
                <label className="name">{name}</label>
                <label className="desc">{description}</label>
            </div>
            <button className="delete" onClick={deleteItem}>Delete</button>
        </div>
    )
}