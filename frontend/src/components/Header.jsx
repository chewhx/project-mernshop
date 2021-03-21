import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalProvider";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  const { userInfo, userLogout, dispatch } = useContext(GlobalContext);

  const history = useHistory();
  const logoutHandler = (e) => {
    e.preventDefault();
    userLogout(dispatch);
    history.push(`/login`);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-5">
        <Navbar.Brand href="/">MERNSHOP</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link to="/secret">Secret</Nav.Link>
          <Nav.Link to="/login">Login</Nav.Link>
        </Nav>
        <Nav>
          {!userInfo ? (
            <Nav.Link href="/login">Log In</Nav.Link>
          ) : (
            <Nav.Link href={`/user/${userInfo._id}`}>{userInfo.name}</Nav.Link>
          )}
        </Nav>
        <Nav>
          <LinkContainer to="/cart">
            <Nav.Link>Cart</Nav.Link>
          </LinkContainer>
        </Nav>
        <Button
          type="submit"
          variant="secondary"
          onClick={(e) => logoutHandler(e)}
        >
          Logout
        </Button>
      </Navbar>
    </>
  );
};

export default Header;
