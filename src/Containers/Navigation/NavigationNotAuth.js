import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import * as ROUTES from "../../constants/routes";

const NavbarWrapper = styled.div`
  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

const NavigationNotAuth = () => {
  return (
    <NavbarWrapper>
      <Navbar className="navbar" fixed bg="light" expand="lg">
        <LinkContainer to={ROUTES.LANDING}>
          <Navbar.Brand>The Cloth Exchange</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <LinkContainer to={ROUTES.HOME}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={ROUTES.SIGN_IN}>
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <LinkContainer to={ROUTES.SIGN_IN}>
              <Nav.Link>Sign In</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavbarWrapper>
  );
};

export default NavigationNotAuth;
