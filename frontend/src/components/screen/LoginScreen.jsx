import React, { useState, useContext } from "react";
import axios from "axios";
import { Form, Button, Card, Row, Container } from "react-bootstrap";
import { GlobalContext } from "../../context/GlobalProvider";

const LoginScreen = ({ history, location }) => {
  const { userLogin, userInfo, dispatch } = useContext(GlobalContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginHandler = (e) => {
    e.preventDefault();
    userLogin(email, password, dispatch);
  };

  console.log("userInfo", userInfo);

  return (
    <Container>
      <Row className="justify-content-center">
        <Card style={{ width: "40%" }}>
          <Card.Body>
            <h1>Log In</h1>
            <Form className="mt-4">
              <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control
                  type="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button
                block
                className="my-4"
                type="submit"
                onClick={(e) => loginHandler(e)}
              >
                Log In
              </Button>
            </Form>
            <hr />
            <p>
              Don't have an account?{" "}
              <Card.Link href="/register">Sign up</Card.Link>
            </p>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default LoginScreen;
