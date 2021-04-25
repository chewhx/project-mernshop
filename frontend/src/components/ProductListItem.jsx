import React, { useState, useContext } from "react";
import {
  Row,
  Col,
  ListGroup,
  Button,
  Form,
  Image,
  InputGroup,
} from "react-bootstrap";
import { GlobalContext } from "../context/GlobalProvider";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../context/constants";
import PropTypes from "prop-types";

const ProductListItem = ({ product }) => {
  const [qty, setQty] = useState(product.qty);
  const { dispatchCart, products, cart } = useContext(GlobalContext);

  return (
    <ListGroup.Item>
      <Row>
        <Col md={6}>
          <Row>
            <Col sm={4}>
              <Image
                fluid
                src={`https://singlecolorimage.com/get/${product._id}/100x100`}
              />
            </Col>
            <Col sm={8}>
              {products[product._id]["name"]}
              <p className="small text-muted">
                Theme:{` `}
                {products[product._id]["theme"]}
              </p>
              <p className="small text-muted">
                Mode:{` `}
                <Form.Control
                  as="select"
                  size="sm"
                  placeholder={cart.items[product._id]["mode"]}
                  style={{ width: "50%" }}
                >
                  <option
                    value={cart.items[product._id]["mode"]}
                    label={cart.items[product._id]["mode"]}
                  />
                  <option value="default" label="Default" />
                  <option value="light" label="Light" />
                  <option value="dark" label="Dark" />
                </Form.Control>
                {cart.items[product._id]["mode"]}
              </p>
            </Col>
          </Row>
        </Col>
        <Col md={2}>
          <Form.Group className="my-3 mx-2">
            <InputGroup>
              <InputGroup.Prepend>
                <Button
                  size="sm"
                  type="button"
                  variant="outline-secondary"
                  onClick={() => {
                    if (qty === 1) return;
                    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
                    dispatchCart({
                      type: CART_ADD_ITEM,
                      payload: {
                        _id: product._id,
                        qty: qty - 1,
                        mode: product.mode,
                        price: product.price,
                        subTotal: (product.price * (qty - 1)).toFixed(2),
                      },
                    });
                  }}
                >
                  -
                </Button>
              </InputGroup.Prepend>
              <Form.Control
                size="sm"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                onBlur={(e) => {
                  if (!e.target.value) {
                    setQty((prevQty) => prevQty);
                  }
                  dispatchCart({
                    type: CART_ADD_ITEM,
                    payload: {
                      _id: product._id,
                      qty: Number(e.target.value),
                      mode: product.mode,
                      price: product.price,
                      subTotal: (
                        product.price * Number(e.target.value)
                      ).toFixed(2),
                    },
                  });
                }}
              />
              <InputGroup.Append>
                <Button
                  size="sm"
                  type="button"
                  variant="outline-secondary"
                  onClick={() => {
                    setQty((prevQty) => prevQty + 1);
                    dispatchCart({
                      type: CART_ADD_ITEM,
                      payload: {
                        _id: product._id,
                        qty: qty + 1,
                        mode: product.mode,
                        price: product.price,
                        subTotal: (product.price * (qty + 1)).toFixed(2),
                      },
                    });
                  }}
                >
                  +
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={2}>
          {" "}
          {`$${Number(product.subTotal).toFixed(2)}`}
          <p className="small text-muted">
            ${Number(product.price).toFixed(2)} /quantity
          </p>
        </Col>
        <Col md={2}>
          <Button
            size="sm"
            type="button"
            variant="outline-danger"
            onClick={() =>
              dispatchCart({
                type: CART_REMOVE_ITEM,
                payload: product._id,
              })
            }
          >
            Remove
          </Button>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default ProductListItem;

ProductListItem.propTypes = {
  product: PropTypes.object,
};
