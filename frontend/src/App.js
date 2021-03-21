import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Secret from "./components/Secret";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { GlobalProvider } from "./context/GlobalProvider";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalProvider>
        <Header />
        <Container>
          <Route exact path="/products/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/secret" component={Secret} />
          <Route exact path="/" component={HomeScreen} />
        </Container>
      </GlobalProvider>
    </Provider>
  );
};

export default App;
