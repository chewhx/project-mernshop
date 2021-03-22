import { CART_ADD_ITEMS, CART_REMOVE_ITEMS } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEMS: {
      const newItem = action.payload;
      const existItem = state.cartItems.find((el) => el._id === newItem._id);

      if (existItem) {
        existItem.quantity = newItem.quantity;
        return { ...state, cartItems: [...state.cartItems] };
      } else {
        return { ...state, cartItems: [...state.cartItems, newItem] };
      }
    }
    case CART_REMOVE_ITEMS: {
      const productIdToRemove = action.payload;

      const existItem = state.cartItems.find(
        (el) => el._id === productIdToRemove
      );

      if (existItem) {
        const editedCart = state.cartItems.filter(
          (el) => el._id !== productIdToRemove
        );
        console.log(editedCart);
        return { ...state, cartItems: [...editedCart] };
      }
      return state;
    }
    default:
      return state;
  }
};
