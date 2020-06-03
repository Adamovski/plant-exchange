import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { LinkContainer } from "react-router-bootstrap";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100%;
  border-radius: 20px;
  background: beige;
  padding: 1rem;
  img {
    display: inline-block;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const ClothesCard = ({ clothes }) => {
  const { images, name, desc, status } = clothes;
  return (
    <CardWrapper>
      <img src={images[0]} alt={name} />
      <p>{desc}</p>
      <LinkContainer to="market/details">
        <button>Dowiedź się więcej</button>
      </LinkContainer>
    </CardWrapper>
  );
};

export default ClothesCard;
