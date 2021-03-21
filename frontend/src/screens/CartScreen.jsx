import React from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import ProductListItem from "../components/ProductListItem";

const CartScreen = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <>
      <h1>Shopping Cart</h1>
      <Row>
        <Col lg={9}>
          <ListGroup variant="flush">
            {Object.keys(cartItems).map((key, idx) => (
              <ProductListItem
                key={`cartItem-${idx}`}
                cartItem={cartItems[key]}
                cartItemId={key}
              />
            ))}
            <ListGroup.Item>1</ListGroup.Item>
            <ListGroup.Item>1</ListGroup.Item>
            <ListGroup.Item>1</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3}>
          <h3>Col - 4</h3>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
