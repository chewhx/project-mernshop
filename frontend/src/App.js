import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import AddScreen from "./screens/AddScreen";
import EditScreen from "./screens/EditScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import GlobalProvider from "./context/GlobalProvider";
import Footer from "./components/Footer";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Container>
        <Route exact path="/products/:id" component={ProductScreen} />
        <Route exact path="/add" component={AddScreen} />
        <Route exact path="/edit" component={EditScreen} />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="/checkout" component={CheckoutScreen} />
        <Route exact path="/" component={HomeScreen} />
      </Container>
      <Footer />
    </GlobalProvider>
  );
};

export default App;
