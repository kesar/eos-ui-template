import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar, Form } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { UALContext } from "ual-reactjs-renderer";
import { GlobalStyle } from "../globalStyles";

const Layout = ({ children }) => {
  const location = useLocation();
  const authContext = useContext(UALContext);
  return (
    <Container fluid>
      <GlobalStyle />
      <Navbar expand="lg" className="p-3 font-weight-bold">
        <Navbar.Brand as={Link} to="/">
          🧠
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link active={location.pathname === "/"} as={Link} to="/">
              Swap
            </Nav.Link>
            <Nav.Link
              active={location.pathname === "/pool"}
              as={Link}
              to="/pool"
            >
              Pool
            </Nav.Link>
          </Nav>
          <Form inline>
            {authContext.activeUser === null ? (
              <Button onClick={authContext.showModal}>Log in</Button>
            ) : (
              <Button onClick={authContext.logout}>Logout</Button>
            )}
          </Form>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
