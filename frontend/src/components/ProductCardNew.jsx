import React, { useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./ProductCardNew.css";
import { Link } from "react-router-dom";
import blobs from "blobs";
import PropTypes from "prop-types";

const ProductCardNew = ({ product }) => {
  useEffect(() => {
    document.querySelector(`#blob-${product._id}`).innerHTML = blobs({
      size: 150,
      complexity: Math.random(),
      contrast: 0.5,
      color: `#${product._id}`,
      guides: false,
      seed: Math.floor(Math.random() * 99),
    });
  }, []);

  return (
    <>
      <Col md={6}>
        <Card
          className="product-card py-4 px-4 mb-3"
          border="light"
          style={{ border: "none" }}
        >
          <Row>
            <Col xs={8}>
              <Link to={`/products/${product._id}`}>
                <Card.Title as="h3" className="text-capitalize">
                  {product.name}
                </Card.Title>
              </Link>
              <p>$4.00</p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
                laborum dolores ....
              </p>
            </Col>
            <Col xs={4}>
              <div id={`blob-${product._id}`}></div>
              {/* <div
                className="mx-auto img-thumbnail"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: `#${product._id}`,
                  display: "inline-block",
                }}
              ></div> */}
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default ProductCardNew;

ProductCardNew.defaultProps = {
  product: {
    id: "007BFF",
    name: "Bootstrap Primary",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio laborum dolores ....",
  },
};

ProductCardNew.propTypes = {
  product: PropTypes.object,
};
