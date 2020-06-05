import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import * as ROUTES from "../../constants/routes";
import SignOutButton from "./SignOut";

const NavbarWrapper = styled.div`
  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

const NavigationAuth = () => {
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
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <LinkContainer to={"/my-clothes"}>
                <NavDropdown.Item>My Clothes</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={"/add-item"}>
                <NavDropdown.Item>Add clothes</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>

            <LinkContainer to={ROUTES.ADMIN}>
              <Nav.Link>Admin</Nav.Link>
            </LinkContainer>
            <SignOutButton />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavbarWrapper>
  );
};

export default NavigationAuth;
