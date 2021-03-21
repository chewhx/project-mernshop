import React, { useReducer } from "react";
import GlobalReducer from "./reducer/userReducer";
import { getProducts } from "./action/productAction";
import { userLogin, userLogout } from "./action/userAction";
import PropTypes from "prop-types";

export const initialState = {
  userInfo: {},
  products: [],
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);
  

  const addToCartHandler = (product, quantity) => {
    let currentCart = JSON.parse(localStorage.getItem("cartItems"));
    let newCart = {};
    if (currentCart) {
      const existItem = currentCart[product._id];
      console.log(existItem);
      if (existItem) {
        existItem.quantity = quantity;
        localStorage.setItem("cartItems", JSON.stringify(currentCart));
      } else {
        newCart = {
          ...currentCart,
          [product._id]: {
            name: product.name,
            quantity,
            price: product.price,
          },
        };
        localStorage.setItem("cartItems", JSON.stringify(newCart));
      }
    } else {
      newCart = {
        [product._id]: {
          name: product.name,
          quantity,
          price: product.price,
        },
      };
      localStorage.setItem("cartItems", JSON.stringify(newCart));
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        userInfo: state.userInfo,
        products: state.products,
        userLogin,
        userLogout,
        getProducts,
        dispatch,
        addToCartHandler,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.any,
};
