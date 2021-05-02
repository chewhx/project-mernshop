import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Nav, Col, Image, Form, Button } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalProvider";
import AppleUI from "../sections/AppleUI";
import BSColorsSection from "../sections/BSColorsSection";
import HeroSection from "../sections/HeroSection";
import FeatureCard from "../components/FeatureCard";

const ProductListing = () => {
  const { products } = useContext(GlobalContext);
  const [menu, setMenu] = useState("Bootstrap");

  useEffect(() => {
    // setResults(
    //   Object.keys(products)
    //     .map((key) => products[key])
    //     .filter(
    //       (each) =>
    //         each.name.toLowerCase().includes(searchTerm) ||
    //         each.theme.toLowerCase().includes(searchTerm)
    //     )
    // );
  }, []);

  return !products ? (
    "Loading..."
  ) : (
    <>
      <HeroSection />
      <Container>
        <Nav className="py-4" activeKey="/bootstrap">
          <Nav.Item>
            <Nav.Link active onClick={() => setMenu("Bootstrap")}>
              <h4>Bootstrap</h4>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setMenu("AppleUI")}>
              <h4>Apple UI</h4>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setMenu("Bootstrap")}>
              <h4>Material UI</h4>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {menu === "Bootstrap" ? (
          <BSColorsSection />
        ) : menu === "AppleUI" ? (
          <AppleUI />
        ) : null}
      </Container>
      <FeatureCard />

      <Container fluid className="bg-light py-4">
        <Row>
          <Col md={3} className="text-center">
            <Image
              roundedCircle
              className="mb-3"
              src="https://via.placeholder.com/100"
            />
            <p>Made fresh daily</p>
          </Col>
          <Col md={3} className="text-center">
            <Image
              roundedCircle
              className="mb-3"
              src="https://via.placeholder.com/100"
            />
            <p>Made fresh daily</p>
          </Col>
          <Col md={3} className="text-center">
            <Image
              roundedCircle
              className="mb-3"
              src="https://via.placeholder.com/100"
            />
            <p>Made fresh daily</p>
          </Col>
          <Col md={3} className="text-center">
            <Image
              roundedCircle
              className="mb-3"
              src="https://via.placeholder.com/100"
            />
            <p>Made fresh daily</p>
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <div className="mx-auto w-50">
          <h1 className="text-center">Gift cards</h1>
          <p className="text-center">$25.00</p>
          <Row className="mb-3">
            <Col xs={10}>Quantity</Col>
            <Col xs={2}>
              <Form.Control type="number" placeholder="1" />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col xs={2}>Values</Col>
            <Col xs={10}>
              <Form.Control as="select">
                <option>$25.00</option>
                <option>$50.00</option>
                <option>$100.00</option>
              </Form.Control>
            </Col>
          </Row>
          <Button
            block
            type="button"
            variant="outline-primary"
            className="rounded-pill py-3"
          >
            Add to Cart
          </Button>
          <Button
            block
            type="button"
            variant="primary"
            className="rounded-pill py-3"
          >
            Buy It Now
          </Button>
        </div>
        <p className="text-center w-50 mx-auto mt-5">
          Your friends and family deserve the gift of good food and we can help
          make that happen. A perfect gift for those you love!
        </p>
      </Container>
      <FeatureCard reverse />
    </>
  );
};

export default ProductListing;
