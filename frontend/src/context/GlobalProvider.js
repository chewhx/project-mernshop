import React, { useState, useReducer, useEffect } from "react";
import axios from "axios";
import GlobalReducer from "./reducer/userReducer";
import { getProducts } from "./action/productAction";
import { userLogin, userLogout } from "./action/userAction";

export const initialState = {
  userInfo: {},
  products: [],
};

export const GlobalContext = React.createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  console.log(`state`, state);
  return (
    <GlobalContext.Provider
      value={{
        userInfo: state.userInfo,
        products: state.products,
        userLogin,
        userLogout,
        getProducts,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
