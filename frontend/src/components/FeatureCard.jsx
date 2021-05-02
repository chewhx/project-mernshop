import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import PropTypes from "prop-types";

const FeatureCard = ({ reverse }) => {
  return (
    <Container>
      <Row className="bg-white">
        <Col md={6} className={reverse && `order-md-1`}>
          <Image
            fluid
            src="https://image.freepik.com/free-photo/abstract-watercolor-art-hand-paint-white-background_84176-91.jpg"
          />
        </Col>
        <Col md={6}>
          <p className="display-3">Color splash</p>
          <p>
            Browse our assortment of meats, baked goods and top shelf products
            you’ll reach for regularly.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default FeatureCard;

FeatureCard.propTypes = {
  reverse: PropTypes.bool,
};
