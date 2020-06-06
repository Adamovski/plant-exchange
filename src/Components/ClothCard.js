import React from "react";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

const CardWrapper = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  background: rgb(0, 0, 0, 0.05);
  justify-content: space-between;
  height: 250px;
  width: 180px;
  padding: 1rem;
  cursor: pointer;
  @media (min-width: 600px) {
    width: 280px;
    height: 350px;
    padding: 1rem;
  }
  p {
    overflow: hidden;
    margin: 0;
    font-size: 0.75rem;
  }
  img {
    margin: 0 auto;
    display: inline-block;
    width: 140px;
    height: 140px;
    object-fit: cover;
    @media (min-width: 600px) {
      width: 240px;
      height: 240px;
    }
  }
`;

const ClothCard = ({ id, desc, title, images, directToDetails }) => {
  return (
    <CardWrapper data-id={id} onClick={directToDetails}>
      <img src={images[0]} alt={title} />
      <p>{desc}</p>
    </CardWrapper>
  );
};

export default ClothCard;
