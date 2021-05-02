import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import ProductCardNew from "../components/ProductCardNew";
import { GlobalContext } from "../context/GlobalProvider";

const Bootstrap = () => {
  const { products } = useContext(GlobalContext);
  return (
    <>
      <p>Bootstrap</p>
      <Row>
        {Object.keys(products).map((key, idx) => (
          <ProductCardNew
            key={`bootstrap-product-${idx}`}
            product={products[key]}
          />
        ))}
      </Row>
    </>
  );
};

export default Bootstrap;
