import React, { useContext } from "react";
import { Formik } from "formik";
import { Row, Col, Form, ListGroup, Button, Badge } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalProvider";
import PageTop from "../components/PageTop";

const CheckoutScreen = () => {
  const { cart, products } = useContext(GlobalContext);
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
    options: { shippingAddress: false, saveInfo: false },
    payment: {
      option: "",
      nameOnCard: "",
      creditCardNumber: "",
      expiration: "",
      cvv: "",
    },
  };
  return (
    <>
      <PageTop>Order Summary</PageTop>
      <Row>
        <Col md={5} lg={4} className="order-md-2 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            Your cart
            <Badge pill variant="primary">
              {Object.keys(cart.items).length}
            </Badge>
          </h4>
          <ListGroup as="ul">
            {cart &&
              Object.keys(cart.items).map((key, idx) => (
                <ListGroup.Item
                  as="li"
                  key={`cart-checkout-${key}-${idx}`}
                  className="d-flex justify-content-between lh-sm"
                >
                  <div>
                    <h6 className="my-0">{products[key]["name"]}</h6>
                    <small className="text-muted">
                      {products[key]["theme"]}
                    </small>
                  </div>
                  <span className="text-muted">
                    ${cart.items[key]["subTotal"]}
                  </span>
                </ListGroup.Item>
              ))}
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between lh-sm"
            >
              <div>
                <h6 className="my-0">Total (SGD)</h6>
              </div>
              <strong>${cart.prices["grandTotal"].toFixed(2)}</strong>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={7} lg={8}>
          <h4>Billing address</h4>
          <Formik initialValues={initialValues}>
            {({ values, handleChange }) => {
              console.log(values);
              return (
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
                  <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control
                      id="userName"
                      name="userName"
                      value={values.userName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Email <span className="text-muted">{`(Optional)`}</span>
                    </Form.Label>
                    <Form.Control
                      id="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      id="address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>
                      Address 2{" "}
                      <span className="text-muted">{`(Optional)`}</span>
                    </Form.Label>
                    <Form.Control
                      id="address2"
                      name="address2"
                      value={values.address2}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Row>
                    <Col md={5}>
                      <Form.Group>
                        <Form.Label>
                          Country{" "}
                          <span className="text-muted">{`(Optional)`}</span>
                        </Form.Label>
                        <Form.Control
                          as="select"
                          id="country"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                        >
                          <option value="" label="Choose..." />
                          <option value="singapore" label="Singapore" />
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md={4}>
                      <Form.Group>
                        <Form.Label>State</Form.Label>
                        <Form.Control
                          as="select"
                          id="state"
                          name="state"
                          value={values.state}
                          onChange={handleChange}
                        >
                          <option value="" label="Choose..." />
                          <option value="newyork" label="New York" />
                          <option value="washington" label="Washington" />
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Label>Zip</Form.Label>
                      <Form.Control
                        id="zip"
                        name="zip"
                        value={values.zip}
                        onChange={handleChange}
                      />
                    </Col>
                  </Form.Row>
                  <hr />
                  <Form.Check
                    type="switch"
                    id="options.shippingAddress"
                    name="options.shippingAddress"
                    label="Shipping address is the same as my billing address"
                    value={true}
                    onChange={handleChange}
                  />
                  <Form.Check
                    type="switch"
                    id="options.saveInfo"
                    name="options.saveInfo"
                    label="Save this information for next time"
                    value={true}
                    onChange={handleChange}
                  />
                  <hr />
                  <h4>Payment</h4>
                  <Form.Group>
                    <Form.Check
                      type="radio"
                      id="payment.option"
                      name="payment.option"
                      label="Credit card"
                      value="creditcard"
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="radio"
                      id="payment.option"
                      name="payment.option"
                      label="Debit card"
                      value="debitcard"
                      onChange={handleChange}
                    />
                    <Form.Check
                      type="radio"
                      id="payment.option"
                      name="payment.option"
                      label="PayPal card"
                      value="paypal"
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Name on card</Form.Label>
                        <Form.Control
                          id="payment.nameOnCard"
                          name="payment.nameOnCard"
                          value={values.payment.nameOnCard}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Credit card number</Form.Label>
                        <Form.Control
                          id="payment.creditCardNumber"
                          name="payment.creditCardNumber"
                          value={values.payment.creditCardNumber}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <Form.Row>
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label>Expiration</Form.Label>
                        <Form.Control
                          id="payment.expiration"
                          name="payment.expiration"
                          value={values.payment.expiration}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    <Col md={3}>
                      <Form.Group>
                        <Form.Label>CVV</Form.Label>
                        <Form.Control
                          id="payment.cvv"
                          name="payment.cvv"
                          value={values.payment.cvv}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Form.Row>
                  <hr />
                  <Button block type="submit" variant="primary" size="lg">
                    Continue to checkout
                  </Button>
                </>
              );
            }}
          </Formik>
        </Col>
      </Row>
    </>
  );
};

export default CheckoutScreen;
