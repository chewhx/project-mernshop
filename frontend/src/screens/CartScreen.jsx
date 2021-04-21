/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import {
  Card,
  Row,
  Col,
  ListGroup,
  Button,
  InputGroup,
  Form,
  Table,
  Image,
} from "react-bootstrap";
import ProductListItem from "../components/ProductListItem";
import { GlobalContext } from "../context/GlobalProvider";

const CartScreen = () => {
  const [totalPrice, setTotalPrice] = useState();
  const { cartItems } = useContext(GlobalContext);

  useEffect(() => {
    const countSubTotal = () => {
      const allProductsSubtotal = cartItems.map((each) =>
        Number(each.subTotal)
      );
      setTotalPrice(
        allProductsSubtotal.reduce((acc, currentValue) => acc + currentValue, 0)
      );
    };

    cartItems && countSubTotal();
  }, [cartItems]);

  return (
    <>
      <h1>Shopping Cart</h1>
      <Row className="ml-1 mb-3">
        <Button type="button" variant="outline-primary">
          {`< Go Back`}
        </Button>
      </Row>
      <Row>
        <Col lg={9}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row className="small font-weight-bold text-muted">
                  <Col lg={6}>PRODUCT</Col>
                  <Col lg={2}>QUANTITY</Col>
                  <Col lg={2}>PRICE</Col>
                  <Col lg={2}></Col>
                </Row>
              </ListGroup.Item>
              {cartItems && cartItems.length === 0 ? (
                <p className="my-5 text-center">Your shopping cart is empty!</p>
              ) : (
                cartItems &&
                cartItems.map((each, idx) => (
                  <ProductListItem
                    key={`productListItem-${idx}`}
                    product={each}
                  />
                ))
              )}
            </ListGroup>
            <Card.Footer>Free Delivery forever!</Card.Footer>
          </Card>
        </Col>
        <Col lg={3}>
          <Card className="mb-3">
            <Card.Body>
              Have coupon?
              <Form.Group className="mt-2">
                <InputGroup>
                  <Form.Control />
                  <InputGroup.Append>
                    <Button type="button" variant="outline-secondary">
                      Apply
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <dl className="row">
                <dt className="col-sm-6">Total price:</dt>
                <dd className="col-sm-6 text-right">${totalPrice}</dd>
                <dt className="col-sm-6">Discount:</dt>
                <dd className="col-sm-6 text-right text-danger">-$10.00</dd>
                <dt className="col-sm-6">Total price:</dt>
                <dd className="col-sm-6 text-right">$68.23</dd>
              </dl>
              <hr />
              <Button block type="button" variant="primary">
                Place Order
              </Button>
              <Button block type="button" variant="outline-primary">
                Continue Shopping
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
