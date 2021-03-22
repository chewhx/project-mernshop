import React from "react";
import { Navbar, Nav, NavDropdown, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../redux/actions/userActions";

const Header = () => {
  const { userInfo } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  console.log(userInfo);
  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-5">
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
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
        <Nav>
          <LinkContainer to="/cart">
            <Nav.Link>
              <span>Cart </span>
              <Badge variant="danger">{cartItems.length}</Badge>
            </Nav.Link>
          </LinkContainer>

          {userInfo ? (
            <>
              <Nav.Link href={`/user/${userInfo.id}`}>{userInfo.name}</Nav.Link>
              <NavDropdown title="" id="nav-dropdown">
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item>Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => dispatch(userLogout())}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <LinkContainer to="/login">
              <Nav.Link>Log In</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
