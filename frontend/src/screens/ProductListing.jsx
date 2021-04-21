import React from "react";
import { Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import products from "../_products.json";

const ProductListing = () => {
  return (
    <>
      <h1>Products</h1>
      <Row>
        {products.map((product, idx) => (
          <ProductCard key={`productKey-${idx}`} product={product} />
        ))}
      </Row>
    </>
  );
};

export default ProductListing;
