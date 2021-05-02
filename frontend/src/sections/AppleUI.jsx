import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import ProductCardNew from "../components/ProductCardNew";
import { GlobalContext } from "../context/GlobalProvider";

const AppleUI = () => {
  const { appleui } = useContext(GlobalContext);
  return (
    <>
      <p>AppleUI</p>
      <Row>
        {Object.keys(appleui[0]).map((key, idx) => (
          <ProductCardNew
            key={`appleui-product-${idx}`}
            product={appleui[0][key]}
          />
        ))}
      </Row>
    </>
  );
};

export default AppleUI;
