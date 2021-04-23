import React, { useContext } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from "prop-types";
import { GlobalContext } from "../context/GlobalProvider";

import { CART_ADD_ITEM } from "../context/constants";

const ProductCard = ({ product, inCart }) => {
  const { dispatchCart } = useContext(GlobalContext);
  return (
    <>
      <Col lg={3} md={4} sm={6}>
        <Card className="mb-3">
          <Link to={`/products/${product._id}`}>
            <Card.Img
              as="div"
              style={{ backgroundColor: `#${product._id}`, height: "200px" }}
              variant="top"
              alt={product.name}
            />
          </Link>
          <Card.Body>
            <small className=" text-muted">{product.theme}</small>
            <Card.Title>
              <Link to={`/products/${product._id}`}>{product.name}</Link>
            </Card.Title>

            <Card.Text>${product.price}</Card.Text>
            {inCart ? (
              <LinkContainer to={`/cart`}>
                <Button block type="button" variant="primary">
                  In cart
                </Button>
              </LinkContainer>
            ) : (
              <Button
                block
                type="button"
                variant="primary"
                onClick={() =>
                  dispatchCart({
                    type: CART_ADD_ITEM,
                    payload: {
                      _id: product._id,
                      qty: 1,
                      mode: "default",
                      price: product.price,
                      subTotal: Number(product.price),
                    },
                  })
                }
              >
                Add to cart
              </Button>
            )}
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
  inCart: PropTypes.bool,
};
