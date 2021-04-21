import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalProvider";

const Header = () => {
  const { cartItems } = useContext(GlobalContext);
  return (
    <>
      <Navbar bg="primary" variant="dark" className="mb-5">
        <Navbar.Brand href="/">MERNSHOP</Navbar.Brand>
        <Nav className="mr-auto">
          <NavDropdown title="Categories" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">
              Something else here
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link href="/cart">
            Cart{" "}
            <span>
              {cartItems && <Badge variant="danger">{cartItems.length}</Badge>}
            </span>
          </Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
