import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  .navbar {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

const Navigation = () => {
  return (
    <NavbarWrapper>
      <Navbar className="navbar" fixed bg="light" expand="lg">
        <Navbar.Brand href="#home">Roślinny Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Strona Główna</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/market">
              <Nav.Link>Market</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#link">Zaloguj Się</Nav.Link>
            <Nav.Link href="#link">O Nas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavbarWrapper>
  );
};

export default Navigation;
