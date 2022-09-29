import { useContext } from "react"
import { ProductsListContext } from "../../context/ProductsList.context"
import { deleteProductAction} from '../../actions/ProductsList.action'
import { useNavigate } from "react-router-dom"

export function ProductListItem({data}) {

    const { dispatchProducts } = useContext(ProductsListContext)
    const navigate = useNavigate()
    
    const deleteItem = (e) => {
        console.log("delete")
        e.preventDefault()
        dispatchProducts(deleteProductAction(data.id))
    }

    const openProductDetails = () => {
        navigate('/products/'+data.id, {state: {productData: data}})
    }
    
    return (
        <div className="product-list-item" onClick={ openProductDetails }>
            <img src={data.img || "https://media.istockphoto.com/vectors/resume-vector-icon-vector-id1220378015?k=20&m=1220378015&s=612x612&w=0&h=ts6kW0hZO67AssBX_A9Jrfio8ZrIlK2q2AhwpcWqF4A="} />
            <div className="name-desc">
                <label className="name">{data.name}</label>
                <label className="desc">{data.description}</label>
            </div>
            <button className="delete" onClick={deleteItem}>Delete</button>
        </div>
    )
}