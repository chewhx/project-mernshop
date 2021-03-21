import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducers";
import { getAllProductsReducer } from "./reducers/productReducers";

const reducer = combineReducers({
  cartItems: cartReducer,
  productList: getAllProductsReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : "";

const initialState = {
  cartItems: { ...cartItemsFromLocalStorage },
};

const store = createStore(reducer, initialState, composeWithDevTools());

export default store;
