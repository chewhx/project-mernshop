import React from "react";
import { Row, Col, ListGroup, Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductListItem from "../components/ProductListItem";

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  let subTotal = 0;
  if (cartItems.length > 1) {
    subTotal = cartItems
      .reduce((acc, item) => acc + item.quantity * item.price, 0)
      .toFixed(2);
  }

  let discountTotal = 0;
  let shippingTotal = 0;
  let totalBeforeTax =
    Number.parseFloat(subTotal) + discountTotal + shippingTotal;
  let taxTotal = Number.parseFloat((0.07 * totalBeforeTax).toFixed(2));
  let grandTotal = Number.parseFloat(totalBeforeTax + taxTotal).toFixed(2);

  return !cartItems ? (
    "Loading"
  ) : (
    <>
      <h1>Shopping Cart</h1>

      <Row>
        <Col lg={8}>
          {cartItems.length >= 1 ? (
            <>
              <ListGroup variant="flush">
                {cartItems.map((cartItem, idx) => (
                  <ProductListItem
                    key={`cartItem-${idx}`}
                    cartItem={cartItem}
                  />
                ))}
              </ListGroup>
              <Col>
                <Button className="mr-4" variant="primary">
                  Go Back
                </Button>
              </Col>
            </>
          ) : (
            <p>You shopping cart is empty! </p>
          )}
        </Col>
        <Col lg={4}>
          <Form className="mb-4">
            <Form.Control placeholder="Eg. 9A2SWE32" />
            <Form.Label>Enter your discount coupon here</Form.Label>
          </Form>
          <ListGroup>
            <ListGroup.Item>
              <div className="d-flex justify-content-between">
                <span className="h5">SUBTOTAL</span>
                <span className="text-right">${subTotal}</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex justify-content-between">
                <span>Discount</span>
                <span className="text-right">${discountTotal}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span className="text-right">${shippingTotal}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Tax</span>
                <span className="text-right">${taxTotal}</span>
              </div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="d-flex justify-content-between">
                <span className="h5">TOTAL</span>
                <span className="text-right">${grandTotal}</span>
              </div>
            </ListGroup.Item>
          </ListGroup>
          <Button block>Proceed to Checkout</Button>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
