import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Row,
  Nav,
  Card,
  Col,
  Image,
  Form,
  Button,
} from "react-bootstrap";
import Input from "../components/Input";
import { GlobalContext } from "../context/GlobalProvider";
import AppleUI from "../sections/AppleUI";
import Bootstrap from "../sections/Bootstrap";
import FeatureCard from "../components/FeatureCard";

const ProductListing = () => {
  const { products } = useContext(GlobalContext);
  const [menu, setMenu] = useState("Bootstrap");
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState();

  useEffect(() => {
    setResults(
      Object.keys(products)
        .map((key) => products[key])
        .filter(
          (each) =>
            each.name.toLowerCase().includes(searchTerm) ||
            each.theme.toLowerCase().includes(searchTerm)
        )
    );
  }, [searchTerm]);

  return !results ? (
    "Loading..."
  ) : (
    <>
      <div
        style={{
          height: "450px",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=695&q=80)",
          backgroundRepeat: " no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: "center",
          marginBottom: "6rem",
        }}
      >
        {/* <Image
          style={{
            width: "100%",
            objectFit: "cover",
          }}
          src="https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
          alt="hero-image"
        /> */}
        <Card
          className="py-5 px-5 bg-light"
          style={{
            position: "absolute",
            bottom: "120px",
            left: "50px",
            zIndex: "2",
          }}
        >
          <p className="display-3">Colour essentials</p>
          <p>
            Locally sourced products, carefully picked with quality and
            freshness in mind.
          </p>
        </Card>
      </div>
      <Container>
        <Input.Text
          id="searchBox"
          name="searchBox"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />

        <Nav className="py-4" activeKey="/bootstrap">
          <Nav.Item>
            <Nav.Link active onClick={() => setMenu("Bootstrap")}>
              Bootstrap
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setMenu("AppleUI")}>Apple UI</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setMenu("Bootstrap")}>
              Material UI
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {menu === "Bootstrap" ? (
          <Bootstrap />
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
