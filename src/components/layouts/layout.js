import PropTypes from "prop-types";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { GlobalStyle } from "../globalStyles";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <Container fluid>
      <GlobalStyle />
      <Navbar expand="lg">
        <Navbar.Brand as={Link} to="/">🧠</Navbar.Brand>
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
