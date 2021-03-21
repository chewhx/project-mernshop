import React, { useEffect } from "react";
import { Row, Container } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap";
import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const { loading, products } = useSelector((state) => state.productList);

  useEffect(() => {
    getAllProducts(dispatch);
  }, []);

  return loading ? (
    <p>Loading...</p>
  ) : (
    <Container>
      <h1>Products</h1>
      <Row>
        {products.map((product, idx) => (
          <ProductCard key={`product-${idx}`} product={product} />
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
