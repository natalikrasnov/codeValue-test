import { v4 as uuidv4 } from 'uuid';

export const ProductsListInitialState = [
  {
    name: "product 1",
    description: "product 1 description",
    price: 120,
    id: uuidv4(),
    createdDate: Date(),
  },
  {
    name: "product 2",
    description: "product 2 description",
    price: 10,
    id: uuidv4(),
    createdDate: Date(),
  },
];

const ActiveProductsListReducer = (products, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return [...action.products];
    case "ADD_PRODUCT":
      let added = false
      products.map(el => {
        if (el.id == action.product.id) {
          el.name = action.product.name;
          el.description = action.product.description;
          el.price = action.product.price;
          // el.img = action.product.img;
          added = true
        }
       return el;
      });
      if(added) return [...products]
      return [...products, action.product];
    case "DELETE_PRODUCT":
      return [...products.filter((el) => el.id !== action.productId)];
    default:
      return [...products];
  }
};

export default ActiveProductsListReducer;
