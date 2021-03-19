import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import LoginScreen from "./components/screen/LoginScreen";
import HomeScreen from "./components/screen/HomeScreen";
import Secret from "./components/Secret";
import Header from "./components/Header";
import { GlobalProvider } from "./context/GlobalProvider";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <Container>
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/secret" component={Secret} />
        <Route exact path="/" component={HomeScreen} />
      </Container>
    </GlobalProvider>
  );
};

export default App;
