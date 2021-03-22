import React, { useState } from "react";
import { Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Rating from "./Rating";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const outOfStock = product.countInStock === 0;

  return (
    <>
      <Col md={4}>
        <Card>
          <Link to={`/products/${product._id}`}>
            <Card.Img variant="top" src={product.image} alt={product.name} />
          </Link>
          <Card.Body>
            <Link to={`/products/${product._id}`}>
              <h5>{product.name}</h5>
            </Link>
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <h4>${product.price}</h4>
          </Card.Body>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control
                  min={1}
                  max={product.countInStock}
                  value={outOfStock ? 0 : quantity}
                  disabled={outOfStock}
                  type="number"
                  placeholder={1}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </Col>
              <Col>
                <Button
                  disabled={outOfStock}
                  variant={outOfStock ? `secondary` : `primary`}
                  onClick={() => {
                    dispatch(addToCart(product._id, Number(quantity)));
                  }}
                >
                  {outOfStock ? `Out of Stock` : `Add to Cart`}
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
};
