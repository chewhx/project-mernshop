import { CART_ADD_ITEMS, CART_REMOVE_ITEMS } from "../constants/cartConstants";

export const addToCart = (product, quantity) => {
  return {
    type: CART_ADD_ITEMS,
    payload: product,
    quantity,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: CART_REMOVE_ITEMS,
    payload: productId,
  };
};
