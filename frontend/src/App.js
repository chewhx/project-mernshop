import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import ProductListing from "./screens/ProductListing";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import GlobalProvider from "./context/GlobalProvider";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Container>
        <Route exact path="/products/:id" component={ProductScreen} />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="/" component={ProductListing} />
      </Container>
    </GlobalProvider>
  );
};

export default App;
