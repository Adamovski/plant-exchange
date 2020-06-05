import React from "react";
import NewProduct from "./AddProduct";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import styled from "styled-components";

const AccountWrapper=styled.div`
`

export default function Account() {
  return (
    <>
    <img></img>
      <LinkContainer to="/mydetails">
        <Button variant="primary" type="submit">
          View your items!
        </Button>
      </LinkContainer>
      <LinkContainer to="/addProduct">
        <Button variant="primary" type="submit">
          Add a new item!
        </Button>
      </LinkContainer>
    </>
  );
}
