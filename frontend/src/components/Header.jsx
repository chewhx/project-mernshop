import React, { useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalProvider";
import { userLogout } from "../context/action/userAction";

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
          <Nav.Link href="/secret">Secret</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
        <Nav>
          {!userInfo ? (
            <Nav.Link href="/login">Log In</Nav.Link>
          ) : (
            <Nav.Link href={`/user/${userInfo._id}`}>{userInfo.name}</Nav.Link>
          )}
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
