import { CART_ADD_ITEMS, CART_REMOVE_ITEMS } from "../constants/cartConstants";

export const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case CART_ADD_ITEMS: {
      const product = action.payload;
      const quantity = action.quantity;
      const existItem = state[product._id];
      if (existItem) {
        existItem.quantity = quantity;
        localStorage.setItem("cartItems", JSON.stringify(state));
        return { ...state };
      } else {
        const newState = {
          ...state,
          [product._id]: {
            name: product.name,
            quantity,
            price: product.price,
          },
        };
        localStorage.setItem("cartItems", JSON.stringify(newState));
        return newState;
      }
    }
    case CART_REMOVE_ITEMS: {
      const productId = action.payload;
      const existItem = state[productId];
      if (existItem) {
        delete state[productId];
        localStorage.setItem("cartItems", JSON.stringify(state));
        return { ...state };
      } else {
        return { ...state };
      }
    }
    default:
      return state;
  }
};
