/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { ListGroup, Col, Row, Image, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const ProductListItem = ({ cartItem, cartItemId }) => {
  const [quantity, setQuantity] = useState();
  const getSubTotal = (unitPrice, qty) => {
    return (unitPrice * qty).toFixed(2);
  };

  return (
    <p>
      <ListGroup.Item>
        <Row>
          <Col sm={3}>
            <Image className="w-100" src={""} rounded />
          </Col>
          <Col sm={4}>
            <h5>{cartItem["name"]}</h5>
          </Col>
          <Col sm={2}>
            <p>${cartItem["price"]}</p>
            <p>
              <Form.Control
                min={1}
                // max={product.countInStock}
                value={quantity}
                disabled={false}
                type="number"
                placeholder={1}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </p>
            <p>x {cartItem["quantity"]}</p>
          </Col>
          <Col sm={2}>
            <h5>${getSubTotal(cartItem["price"], cartItem["quantity"])}</h5>
          </Col>
          <Col sm={1}>
            <p>X</p>
          </Col>
        </Row>
      </ListGroup.Item>
    </p>
  );
};

export default ProductListItem;

ProductListItem.propTypes = {
  cartItem: PropTypes.object,
  cartItemId: PropTypes.string,
};
