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
import PropTypes from "prop-types";

const ProductListItem = ({ product }) => {
  const [qty, setQty] = useState(product.qty);
  const { removeFromCart } = useContext(GlobalContext);

  return (
    <ListGroup.Item>
      <Row>
        <Col lg={6}>
          <Row>
            <Col sm={4}>
              <Image
                fluid
                src={`https://singlecolorimage.com/get/${product._id}/100x100`}
              />
            </Col>
            <Col sm={8}>Camera Canon EO S M 50 Kit</Col>
          </Row>
        </Col>
        <Col lg={2}>
          <Form.Group className="my-3 mx-2">
            <InputGroup>
              <InputGroup.Prepend>
                <Button
                  size="sm"
                  type="button"
                  variant="outline-secondary"
                  onClick={() =>
                    setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1))
                  }
                >
                  -
                </Button>
              </InputGroup.Prepend>
              <Form.Control
                size="sm"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
              />
              <InputGroup.Append>
                <Button
                  size="sm"
                  type="button"
                  variant="outline-secondary"
                  onClick={() => setQty((prevQty) => prevQty + 1)}
                >
                  +
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col lg={2}> {`$${product.subTotal}`} </Col>
        <Col lg={2}>
          <Button
            size="sm"
            type="button"
            variant="outline-danger"
            onClick={() => removeFromCart(product._id)}
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
