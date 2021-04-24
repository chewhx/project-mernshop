/* eslint-disable react/prop-types */
import React, { useState, useContext, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import generateColor from "../utils/generateColor";
import getColorName from "../utils/getColorName";
import generatePrice from "../utils/generatePrice";
import PageTop from "../components/PageTop";
import { GlobalContext } from "../context/GlobalProvider";
import { Formik } from "formik";
import { PRODUCTS_ADD_ITEM } from "../context/constants";

const AddProductScreen = () => {
  const { dispatchProducts, products } = useContext(GlobalContext);
  console.log(products);

  const [initialValues, setInitialValues] = useState();

  useEffect(() => {
    const newColor = generateColor();
    setInitialValues({
      _id: newColor,
      name: getColorName.name(newColor)[1],
      price: generatePrice(),
    });
  }, []);

  return !initialValues ? (
    "Loading"
  ) : (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) =>
        dispatchProducts({
          type: PRODUCTS_ADD_ITEM,
          payload: {
            ...values,
            theme: "User",
            mode: ["default", "light", "dark"],
            rating: 4.5,
          },
        })
      }
    >
      {(props) => (
        <>
          <PageTop>Add Product</PageTop>
          <Row>
            <Col md="6">
              <Card className="mb-3">
                <Card.Img
                  as="div"
                  style={{
                    backgroundColor: `#${props.values._id}`,
                    height: "200px",
                  }}
                  variant="top"
                  alt={`product.name`}
                />
                <Card.Body>
                  <Card.Title>{`${props.values.name}`}</Card.Title>
                  <Card.Text>${`${props.values.price}`}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Form.Label>Hex Color Code</Form.Label>
              <Form.Control
                name="_id"
                id="_id"
                value={props.values._id}
                onChange={props.handleChange}
              />
              <Form.Label>Color Name</Form.Label>
              <Form.Control
                name="name"
                id="name"
                value={props.values.name}
                onChange={props.handleChange}
              />
              <Form.Label>Price</Form.Label>
              <Form.Control
                name="price"
                id="price"
                value={props.values.price}
                onChange={props.handleChange}
              />
              <Button
                type="button"
                variant="primary"
                onClick={() => {
                  const newColor = generateColor();
                  props.setFieldValue("_id", newColor);
                  props.setFieldValue("name", getColorName.name(newColor)[1]);
                  props.setFieldValue("price", generatePrice());
                }}
              >
                Random
              </Button>
              <Button
                type="button"
                variant="success"
                onClick={() => props.handleSubmit()}
              >
                Add
              </Button>
            </Col>
          </Row>
        </>
      )}
    </Formik>
  );
};

export default AddProductScreen;
