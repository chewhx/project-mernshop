/* eslint-disable react/prop-types */
import React, { useEffect, useState, useContext } from "react";
import { Row, Col, Image, Card, Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { HeartFill } from "react-bootstrap-icons";
import Rating from "../components/Rating";
import { GlobalContext } from "../context/GlobalProvider";
import { CART_ADD_ITEM } from "../context/constants";
import FormCounter from "../components/FormCounter";
import PageTop from "../components/PageTop";

const ProductScreen = ({ match }) => {
  const { products, dispatchCart, cart } = useContext(GlobalContext);

  const [mode, setMode] = useState("default");
  const [product, setProduct] = useState(products[match.params.id]);
  const [qty, setQty] = useState(cart.items[product._id].qty || 1);

  useEffect(async () => {}, [setProduct]);
  return !product ? (
    "Loading..."
  ) : (
    <>
      <PageTop>{` `}</PageTop>
      <Card>
        <Row>
          <Col lg={6}>
            <Image
              fluid
              src={`https://singlecolorimage.com/get/${product._id}/590x500`}
            />
          </Col>
          <Col lg={6}>
            <Card.Body>
              <h2>{product.name}</h2>
              <Rating />
              <p>
                <span className="h4">${product.price}</span>
                <span className="text-muted"> / pixel</span>
              </p>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Exercitationem iure ad repellendus reiciendis voluptatibus non?
                Nisi autem harum quo tempora in doloribus aliquam eligendi.
                Autem illo perspiciatis quasi adipisci illum!
              </Card.Text>
              <dl className="row">
                <dt className="col-sm-4">HEX Code</dt>
                <dd className="col-sm-8">{`#${product._id.toUpperCase()}`}</dd>
                <dt className="col-sm-4">Theme </dt>
                <dd className="col-sm-8">{product.theme}</dd>
                <dt className="col-sm-4">RGBA</dt>
                <dd className="col-sm-8">(2,117,216,1)</dd>
              </dl>
              <hr />
              <Form.Row className="mb-3">
                <Col xs={6} md={4}>
                  <FormCounter
                    className="my-3 mx-2"
                    label="Quantity"
                    value={qty}
                    onChange={setQty}
                  />
                </Col>
                <Col md={8}>
                  <Form.Group className="my-3 mx-2">
                    <Form.Label>Select size</Form.Label>
                    {product.mode.map((each, idx) => (
                      <Form.Check
                        key={`${product.name}-mode-${idx}`}
                        id="mode"
                        name="mode"
                        type="radio"
                        label={each}
                        value={each}
                        onChange={(e) => setMode(e.target.value)}
                      />
                    ))}
                  </Form.Group>
                </Col>
              </Form.Row>
              <Button className="mr-2" type="button" variant="primary">
                Buy now
              </Button>
              <Button
                className="mr-2"
                type="button"
                variant="primary"
                onClick={() =>
                  dispatchCart({
                    type: CART_ADD_ITEM,
                    payload: {
                      _id: product._id,
                      qty: qty,
                      mode: mode,
                      price: product.price,
                      subTotal: (product.price * Number(qty)).toFixed(2),
                    },
                  })
                }
              >
                Add to cart
              </Button>
              <Button className="mr-2" type="button" variant="outline-danger">
                <HeartFill />
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default ProductScreen;

ProductScreen.propTypes = {
  product: PropTypes.object,
  match: PropTypes.object,
};
