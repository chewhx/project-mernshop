import React from "react";
import { Formik } from "formik";
import { Row, Col, Form, ListGroup } from "react-bootstrap";
const CheckoutScreen = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    address: "",
    address2: "",
    country: "",
    state: "",
    zip: "",
    
  };
  return (
    <>
      <Row>
        <Col lg={8}>
          <h2>Billing address</h2>
          <Formik initialValues={initialValues}>
            {({ values, handleChange }) => (
              <>
                <Form.Row>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        id="firstName"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        id="lastName"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Form.Row>
                <Form.Row>
                  <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      id="userName"
                      name="userName"
                      value={values.userName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Form.Row>
              </>
            )}
          </Formik>
        </Col>
        <ListGroup></ListGroup>
      </Row>
    </>
  );
};

export default CheckoutScreen;
