import React, { useState, useEffect } from "react";
import { Form, Button, Card, Row, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/userActions";
import PropTypes from "prop-types";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo) {
      history.push(`/`);
    }
  }, []);

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
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(userLogin(email, password));
                }}
              >
                Log In
              </Button>
            </Form>
            <hr />
            <Button block variant="outline-secondary" className="my-3">
              Sign In With Google
            </Button>
            <Button block variant="outline-secondary" className="my-3">
              Sign In With Facebook
            </Button>
            <p>
              Don&apos;t have an account?
              <Card.Link href="/register"> Sign up</Card.Link>
            </p>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default LoginScreen;

LoginScreen.propTypes = {
  history: PropTypes.object,
};
