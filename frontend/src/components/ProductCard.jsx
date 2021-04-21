import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const ProductCard = ({ product }) => {
  return (
    <>
      <Col lg={3} md={4} sm={6}>
        <Card style={{ width: "18rem" }}>
          <Link to={`/products/${product._id}`}>
            <Card.Img variant="top" src={product.image} alt={product.name} />
          </Link>
          <Card.Body>
            <Card.Title>
              <Link to={`/products/${product._id}`}>{product.name}</Link>
            </Card.Title>
            <Card.Text>${product.price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
};
