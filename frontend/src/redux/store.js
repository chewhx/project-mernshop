import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducers";
import { getAllProductsReducer } from "./reducers/productReducers";
import { userLoginReducer } from "./reducers/userReducers";
import thunk from "redux-thunk";

const reducer = combineReducers({
  cart: cartReducer,
  productList: getAllProductsReducer,
  user: userLoginReducer,
});

//  Get cartItems, if any, stored in local storage
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : "";

//  Get userInfo, if any, stored in local storage
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : "";

//  Set initial state for store
const initialState = {
  //  include cart items previously stored in local storage
  cart: { cartItems: cartItemsFromLocalStorage },
  user: { userInfo: userInfoFromLocalStorage },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
