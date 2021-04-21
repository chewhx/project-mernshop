import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem("cartItems")) || []);
  }, []);

  const addToCart = (object) => {
    // check if object._id already exists in current cart
    let existItem = cartItems.find((each) => each._id === object._id);
    console.log(existItem);
    // if so, change only the quantity
    if (existItem) {
      let newItems = cartItems.filter((each) => each._id !== object._id);
      existItem.qty = object.qty;
      newItems.push(existItem);
      console.log(newItems);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
    // otherwise, add full object to array
    if (!existItem) {
      const newItems = [...cartItems, object];
      setCartItems(newItems);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
  };

  const removeFromCart = (objectId) => {
    const newItems = cartItems.filter((each) => each._id !== objectId);
    setCartItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  };

  return (
    <GlobalContext.Provider
      value={{ cartItems, setCartItems, addToCart, removeFromCart }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

GlobalProvider.propTypes = {
  children: PropTypes.node,
};
