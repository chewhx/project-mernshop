import React, { useContext, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  Container,
  Image,
  Button,
  Form,
} from "react-bootstrap";
import { GlobalContext } from "../../context/GlobalProvider";

const HomeScreen = () => {
  const { products, getProducts, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  console.log("products :>> ", products);

  // get products from global state
  return !products.data ? (
    <p>Loading...</p>
  ) : (
    <Container>
      <h1>Products</h1>
      <Row>
        {products.data.map((product, idx) => (
          <Col md={4} key={`product-${idx}`}>
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Subtitle>{product.price}</Card.Subtitle>
              </Card.Body>
              <Card.Footer>
                <Button>Add to Cart</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
