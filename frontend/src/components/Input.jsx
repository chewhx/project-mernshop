import React from "react";
import { getNames } from "country-list";
import { Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

import _states from "../_states.json";

const Input = () => {
  return <div>Input</div>;
};

Input.Text = function InputText({ label, ...rest }) {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control {...rest} />
    </Form.Group>
  );
};

Input.SelectCountry = function InputSelectCountry({ label, ...rest }) {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control as="select" {...rest}>
        <option value="" label="Choose..." />
        {getNames().map((name, idx) => (
          <option key={`country-option-${idx}`} values={name} label={name} />
        ))}
      </Form.Control>
    </Form.Group>
  );
};

Input.SelectState = function InputSelectState({ label, ...rest }) {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control as="select" {...rest}>
        <option value="" label="Choose..." />
        {_states.map((name, idx) => (
          <option key={`states-option-${idx}`} values={name} label={name} />
        ))}
      </Form.Control>
    </Form.Group>
  );
};

Input.Check = function InputCheck({ label, ...rest }) {
  return (
    <Form.Group>
      <Form.Check label={label} {...rest} />
    </Form.Group>
  );
};

Input.Expiration = function Expiration({ label, ...rest }) {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Row>
        <Col>
          <Form.Control placeholder="MM" {...rest} />
        </Col>
        {"/"}
        <Col>
          <Form.Control placeholder="YY" {...rest} />
        </Col>
      </Row>
    </Form.Group>
  );
};

export default Input;

Input.propTypes = {
  value: PropTypes.string || PropTypes.number,
  onChange: PropTypes.func,
};

const labelValidation = {
  label: PropTypes.string,
};

Input.Text.propTypes = labelValidation;
Input.Check.propTypes = labelValidation;
Input.SelectCountry.propTypes = labelValidation;
Input.SelectState.propTypes = labelValidation;
Input.Expiration.propTypes = labelValidation;
