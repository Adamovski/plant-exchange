import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  text-align: center;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  background: rgb(0, 0, 0, 0.05);
  justify-content: space-between;
  height: 300px;
  width: 180px;
  padding: 1rem;
  cursor: pointer;
  @media (max-width: 400px) {
    width: 140px;
    height: 250px;
    padding: 0.5rem;
    grid-gap: 1rem;
  }
  @media (min-width: 600px) {
    width: 280px;
    height: 350px;
    padding: 1rem;
  }
  p {
    overflow: hidden;
    margin: 0;
    font-size: 0.75rem;
    @media (max-width: 400px) {
       {
        padding: 0;
        margin: 0;
      }
    }
  }
  img {
    margin: 0 auto;
    display: inline-block;
    width: 140px;
    height: 140px;
    object-fit: cover;
    @media (max-width: 400px) {
      width: 120px;
      height: 140px;
      padding: 0.5rem;
    }
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
