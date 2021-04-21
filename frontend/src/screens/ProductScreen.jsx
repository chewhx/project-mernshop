import React, { useEffect, useState, useContext } from "react";
import {
  Row,
  Col,
  Image,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import PropTypes from "prop-types";
import { HeartFill } from "react-bootstrap-icons";
import products from "../_products.json";
import Rating from "../components/Rating";
import { GlobalContext } from "../context/GlobalProvider";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState();
  const [qty, setQty] = useState(1);

  const { addToCart } = useContext(GlobalContext);

  useEffect(async () => {
    const foundProduct = products.filter(
      (product) => product._id === match.params.id
    );
    setProduct(foundProduct[0]);
  }, [match.params.id]);
  return !product ? (
    "Loading..."
  ) : (
    <>
      <Card>
        <Row>
          <Col md={6}>
            <Image
              fluid
              src={`https://singlecolorimage.com/get/${product._id}/590x500`}
            />
          </Col>
          <Col md={6}>
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
                <dt className="col-sm-4">HEX Color Code</dt>
                <dd className="col-sm-8">{product._id}</dd>
                <dt className="col-sm-4">RBG </dt>
                <dd className="col-sm-8">(222,222,222)</dd>
                <dt className="col-sm-4">Model</dt>
                <dd className="col-sm-8">{product._id}</dd>
              </dl>
              <hr />
              <Form.Row className="mb-3">
                <Col xs={6} md={4}>
                  <Form.Group className="my-3 mx-2">
                    <Form.Label>Quantity</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <Button
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
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      ></Form.Control>
                      <InputGroup.Append>
                        <Button
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
                <Col md={8}>
                  <Form.Group className="my-3 mx-2">
                    <Form.Label>Select size</Form.Label>
                    <Form.Check
                      name="size"
                      type="radio"
                      id={`small`}
                      label={`Small`}
                    />
                    <Form.Check
                      name="size"
                      type="radio"
                      id={`Medium`}
                      label={`Medium `}
                    />
                    <Form.Check
                      name="size"
                      type="radio"
                      id={`Large`}
                      label={`Large`}
                    />
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
                  addToCart({
                    _id: product._id,
                    qty: qty,
                    price: product.price,
                    subTotal: (product.price * qty).toFixed(2),
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
