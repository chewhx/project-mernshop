import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown, Badge, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { GlobalContext } from "../context/GlobalProvider";

const Header = () => {
  const { cart } = useContext(GlobalContext);
  return (
    <>
      <Navbar sticky="top" bg="white" variant="light" className="py-4 bg-white">
        <Container>
          <Navbar.Brand href="/">MERNSHOP</Navbar.Brand>
          <Nav className="mx-auto">
            <LinkContainer to={`/`}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={`/products`}>
              <Nav.Link>Shop All</Nav.Link>
            </LinkContainer>
            <LinkContainer to={`/`}>
              <Nav.Link>Contact Us</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Products" id="nav-dropdown">
              <LinkContainer to={`/add`}>
                <NavDropdown.Item eventKey="4.1">Add product</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={`/edit`}>
                <NavDropdown.Item eventKey="4.2">Edit product</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
          <Nav className="ml-auto">
            <LinkContainer to="/cart">
              <Nav.Link>
                Cart{" "}
                <span>
                  {cart && (
                    <span className="h4">
                      <Badge variant="success">
                        {Object.keys(cart.items).length}
                      </Badge>
                    </span>
                  )}
                </span>
                <span className="h5"> ${cart.prices.subTotal.toFixed(2)}</span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
