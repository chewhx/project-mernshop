import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Image, ListGroup, Form, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import PropTypes from "prop-types";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState();

  useEffect(async () => {
    const { data } = await axios.get(`/api/v1/products/${match.params.id}`);
    setProduct(data);
  }, [match.params.id]);
  return !product ? (
    "Loading..."
  ) : (
    <>
      <Row>
        <Col md={6}>
          <Image fluid src={product.image} />
        </Col>

        <Col md={6}>
          <h1>{product.name}</h1>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <p>{product.description}</p>
          <h1>${product.price}</h1>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {`Brand   `}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              {product.brand}
            </ListGroup.Item>
            <ListGroup.Item>
              {`Category  `}ß
              {product.category}
            </ListGroup.Item>
            <ListGroup.Item>
              {`Model`}&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              {product.category}
            </ListGroup.Item>
            <ListGroup.Item>
              <span className="mr-5">In Stock</span>
              <span className="ml-5">{product.countInStock}</span>
            </ListGroup.Item>
          </ListGroup>
          <Form>
            <Form.Row>
              <Col md={3}>
                <Form.Control
                  min={1}
                  max={product.countInStock}
                  type="number"
                  placeholder={1}
                />
              </Col>
              <Col>
                <Button>Add to Cart</Button>
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;

ProductScreen.propTypes = {
  product: PropTypes.object,
  match: PropTypes.object,
};
