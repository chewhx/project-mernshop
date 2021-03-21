import React, { useContext, useState } from "react";
import { Col, Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Rating from "./Rating";
import { GlobalContext } from "../context/GlobalProvider";
import { addToCart, removeFromCart } from "../redux/actions/cartAction";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const { addToCartHandler } = useContext(GlobalContext);
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const outOfStock = product.countInStock === 0;

  console.log(`${product.name} - ${quantity}`);

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
                    addToCartHandler(product, Number(quantity));
                    dispatch(addToCart(product, Number(quantity)));
                  }}
                >
                  {outOfStock ? `Out of Stock` : `Add to Cart`}
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(removeFromCart(product._id));
                  }}
                >
                  Remove
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
