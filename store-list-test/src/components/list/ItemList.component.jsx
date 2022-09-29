import { ProductListItem } from "./ProductListItem.component";

export function ItemList({ data }) {
    return (
        <div className="item-list">
            {
                data && data.map((el, index) =>
                    <ProductListItem key={index}
                        data={el}
                    />
                )
            }
        </div>
            
    )
}