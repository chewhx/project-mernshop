import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalProvider";
import ProductCardNew from "../components/ProductCardNew";
import { Container, Row } from "react-bootstrap";
const ShopAllScreen = () => {
  const { products } = useContext(GlobalContext);
  return (
    <Container>
      <Row>
        {Object.keys(products).map((key, idx) => (
          <ProductCardNew
            product={products[key]}
            key={`shopall-product-${idx}`}
          />
        ))}
      </Row>
    </Container>
  );
};

export default ShopAllScreen;
