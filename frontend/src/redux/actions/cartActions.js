import {
  CART_ADD_ITEMS,
  CART_REMOVE_ITEMS,
  CART_UPDATE_ITEMS,
} from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (productId, quantity) => async (
  dispatch,
  getState
) => {
  //  Get product info from API
  const { data } = await axios.get(`/api/v1/products/${productId}`);

  //  Dispatch action to add item
  dispatch({
    type: CART_ADD_ITEMS,
    payload: {
      ...data,
      quantity,
    },
  });

  //  Get cartItems from state and store in localStorage
  const cartItemsFromState = getState().cart.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItemsFromState));
};

export const removeFromCart = (productId) => async (dispatch, getState) => {
  //  Dispatch action to remove item
  dispatch({
    type: CART_REMOVE_ITEMS,
    payload: productId,
  });
  //  Get cartItems from state and store in localStorage
  const cartItemsFromState = getState().cart.cartItems;
  localStorage.setItem("cartItems", JSON.stringify(cartItemsFromState));
};

export const updateCartItems = (products) => ({
  type: CART_UPDATE_ITEMS,
  payload: products,
});
