import React from "react";
import styled from "styled-components";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";

const CardWrapper = styled.div`
  text-align:center;
  height: 500px;
  width: 100%;
  border:2px solid black;
  border-radius: 20px;
  padding: 1rem;
  p{
    height:20%;
    overflow:hidden;
    }
  img {
    margin:0 auto;
    display: inline-block;
    width: 80%;
    height: 300px;
    object-fit: cover;
  }
  button {
    margin:0:auto;
  }
`;

const ClothCard = ({ clothes, directToDetails }) => {
  const { images, name, desc, id } = clothes;
  return (
    <CardWrapper>
      <img src={images[0]} alt={name} />
      <p>{desc}</p>
      <Button value={id} onClick={directToDetails} variant="primary">
        Dowiedź się więcej
      </Button>
    </CardWrapper>
  );
};

export default ClothCard;
