export function ProductListItem({
    img = "https://media.istockphoto.com/vectors/resume-vector-icon-vector-id1220378015?k=20&m=1220378015&s=612x612&w=0&h=ts6kW0hZO67AssBX_A9Jrfio8ZrIlK2q2AhwpcWqF4A=",
    name,
    description,
    id,
    deleteItem,
    onClick
}) {
    
    return (
        <div className="product-list-item" onClick={()=> onClick(id) }>
            <img src={img} />
            <div className="name-desc">
                <label className="name">{name}</label>
                <label className="desc">{description}</label>
            </div>
            <button className="delete" onClick={deleteItem}>Delete</button>
        </div>
    )
}