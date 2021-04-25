import React from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import { Facebook, Instagram, Youtube, Twitter } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="bg-white mt-5 pt-5 pb-3">
      <Container>
        <Row>
          <Col md={4} as="aside" className="mb-3">
            <p className="mt-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
              cupiditate tenetur aut! Recusandae ad totam, obcaecati maiores,
              earum beatae ut eaque quae provident aliquid rerum ullam nam
              dolores explicabo molestias.
            </p>
            <Button variant="outline-secondary" className="mr-3 mb-2">
              <Facebook />
            </Button>
            <Button variant="outline-secondary" className="mr-3 mb-2">
              <Instagram />
            </Button>
            <Button variant="outline-secondary" className="mr-3 mb-2">
              <Youtube />
            </Button>
            <Button variant="outline-secondary" className="mr-3 mb-2">
              <Twitter />
            </Button>
          </Col>
          <Col md={2} sm={3} as="aside" className="mb-3">
            <h6>About</h6>
            <ul className="list-unstyled">
              <li>About us</li>
              <li>Services</li>
              <li>Rules and terms</li>
              <li>Blogs</li>
            </ul>
          </Col>
          <Col md={2} sm={3} as="aside" className="mb-3">
            <h6>Services</h6>
            <ul className="list-unstyled">
              <li>Help center</li>
              <li>Refunds</li>
              <li>Terms and Policy</li>
              <li>Disputes</li>
            </ul>
          </Col>
          <Col md={2} sm={3} as="aside" className="mb-3">
            <h6>For users</h6>
            <ul className="list-unstyled">
              <li>Login</li>
              <li>Register</li>
              <li>Account Settings</li>
              <li>My Orders</li>
              <li>My Wishlist</li>
            </ul>
          </Col>
          <Col md={2} sm={3} as="aside" className="mb-3">
            <h6>Our app</h6>
            <ul className="list-unstyled">
              <li>
                <Image
                  fluid
                  className="mb-2"
                  style={{ maxWidth: "150px" }}
                  src="/images/appstore.png"
                />
              </li>
              <li>
                <Image
                  fluid
                  className="mb-2"
                  style={{ maxWidth: "150px" }}
                  src="/images/playmarket.png"
                />
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row className="d-flex justify-content-between">
          <Col md={8}>
            <p> © 2020 Company All rights reserved </p>
          </Col>
          <Col md={4} className="text-right">
            <p>Privacy & Cookies &nbsp; &nbsp; &nbsp; &nbsp; Accessibilty</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
