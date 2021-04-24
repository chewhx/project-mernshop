import React, { useContext } from "react";
import { Row, Col, Button, Card } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ProductCard from "../components/ProductCard";
import PageTop from "../components/PageTop";
import { GlobalContext } from "../context/GlobalProvider";

const ProductListing = () => {
  const { products, cart } = useContext(GlobalContext);

  return (
    <>
      <PageTop>Products</PageTop>

      <Row>
        <Col lg={3} md={4} sm={6}>
          <Card className="mb-3" border="light">
            <Card.Body className="text-center">
              <LinkContainer to={`/add`}>
                <Button size="lg">+</Button>
              </LinkContainer>
              <Card.Title>Add a new color</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        {Object.keys(products).map((key, idx) => (
          <ProductCard
            key={`productKey-${idx}`}
            product={products[key]}
            inCart={cart.items[key]}
          />
        ))}
      </Row>
    </>
  );
};

export default ProductListing;
