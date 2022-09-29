export const addProductAction = (product) => ({
  type: "ADD_PRODUCT",
  product,
});
export const saveProductAction = (product) => ({
  type: "SAVE_PRODUCT",
  product,
});

export const setProductsAction = (products) => ({
  type: "SET_PRODUCTS",
  products,
});


export const deleteProductAction = (productId) => ({
  type: "DELETE_PRODUCT",
  productId,
});
