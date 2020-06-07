import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import * as ROUTES from "../../constants/routes";
import SignOutSpan from "./SignOut";

const NavbarWrapper = styled.div`
  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .bg-light {
    background: white !important;
  }
  .navbar-toggler {
    border: none;
    &:focus {
      outline: none;
    }
  }
  .dropdown {
    position: static;
  }
  .dropdown-menu {
    @media (min-width: 768px) {
      right: 0;
      left: auto;
      text-align: center;
    }
    border: none;
    border-radius: 0;
  }
  .dropdown-item {
    @media (max-width: 768px) {
      padding-left: 0;
      right: 0;
    }
    &:active {
      background: inherit;
    }
  }
  .dropdown-item.active {
    background: rgba(0, 0, 0, 0.05);
    color: inherit;
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
            <LinkContainer to={ROUTES.ADMIN}>
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <LinkContainer to={"/my-clothes"}>
                <NavDropdown.Item>My Clothes</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to={"/add-item"}>
                <NavDropdown.Item>Add clothes</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item>
                <SignOutSpan />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavbarWrapper>
  );
};

export default NavigationAuth;
