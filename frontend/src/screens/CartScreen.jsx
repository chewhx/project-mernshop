/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import {
  Card,
  Row,
  Col,
  ListGroup,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import PageTop from "../components/PageTop";
import ProductListItem from "../components/ProductListItem";
import { GlobalContext } from "../context/GlobalProvider";

const CartScreen = () => {
  const { cart } = useContext(GlobalContext);

  return (
    <>
      <PageTop>Shopping Cart</PageTop>
      <Row className="ml-1 mb-3">
        <Button type="button" variant="outline-primary">
          {`< Go Back`}
        </Button>
      </Row>
      <Row>
        <Col xl={9}>
          <Card className="mb-3">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row className="small font-weight-bold text-muted">
                  <Col lg={6}>PRODUCT</Col>
                  <Col lg={2}>QUANTITY</Col>
                  <Col lg={2}>PRICE</Col>
                  <Col lg={2}></Col>
                </Row>
              </ListGroup.Item>
              {Object.keys(cart.items).length === 0 ? (
                <p className="my-5 text-center">Your shopping cart is empty!</p>
              ) : (
                Object.keys(cart.items).map((key, idx) => (
                  <ProductListItem
                    key={`productListItem-${idx}`}
                    product={cart.items[key]}
                  />
                ))
              )}
            </ListGroup>
            <Card.Footer>
              We provide free international and domestic shipping!
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={3}>
          <Row>
            <Col sm={12} md={4} xl={12}>
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
            </Col>
            <Col sm={12} md={8} xl={12}>
              <Card className="mb-3">
                <Card.Body>
                  <dl className="row">
                    <dt className="col-sm-6">Sub-total:</dt>
                    <dd className="col-sm-6 text-right">
                      ${cart.prices.subTotal.toFixed(2)}
                    </dd>
                    <dt className="col-sm-6">Discount:</dt>
                    <dd className="col-sm-6 text-right text-danger">
                      -${cart.prices.discount.toFixed(2)}
                    </dd>
                    <dt className="col-sm-6">Total price:</dt>
                    <dd className="col-sm-6 text-right">
                      ${cart.prices.grandTotal.toFixed(2)}
                    </dd>
                  </dl>
                  <hr />
                  <LinkContainer to={`/checkout`}>
                    <Button
                      disabled={Object.keys(cart.items).length === 0}
                      block
                      type="button"
                      variant="primary"
                    >
                      Place Order
                    </Button>
                  </LinkContainer>
                  <Button block type="button" variant="outline-primary">
                    Continue Shopping
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
