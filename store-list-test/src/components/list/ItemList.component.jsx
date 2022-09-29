import { ProductListItem } from "./ProductListItem.component";

export function ItemList({ onItemSelected }) {
    return (
        <div className="item-list">
            <ProductListItem onClick={onItemSelected} />
        </div>
            
    )
}