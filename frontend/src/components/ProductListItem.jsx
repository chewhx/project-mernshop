/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ListGroup, Col, Row, Image, Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const ProductListItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const getSubTotal = (unitPrice, qty) => {
    return (unitPrice * qty).toFixed(2);
  };

  return (
    <>
      <ListGroup.Item>
        <Row>
          <Col sm={3}>
            <Image className="w-100" src={cartItem.image} />
          </Col>
          <Col sm={4}>
            <p>{cartItem.name}</p>
          </Col>
          <Col sm={2}>
            <p>
              <Form.Control
                min={1}
                max={cartItem.countInStock}
                value={quantity}
                type="number"
                onChange={(e) => {
                  setQuantity(e.target.value);
                  dispatch(addToCart(cartItem._id, Number(e.target.value)));
                }}
              />
            </p>
            <p>x ${cartItem.price}</p>
          </Col>
          <Col sm={2}>
            <p>${getSubTotal(cartItem.price, cartItem.quantity)}</p>
          </Col>
          <Col sm={1}>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => {
                dispatch(removeFromCart(cartItem._id));
              }}
            >
              x
            </Button>
          </Col>
        </Row>
      </ListGroup.Item>
    </>
  );
};

export default ProductListItem;

ProductListItem.propTypes = {
  cartItem: PropTypes.object,
};
