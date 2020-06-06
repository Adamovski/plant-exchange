import React, { useState } from "react";
import styled from "styled-components";
import ImageSlides from "../../components/ImageSlides";

const Popup = styled.div`
  background: rgba(256, 256, 256);
  position: absolute;
  top: 56px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  width: 80%;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  padding: 1rem;
  img {
    display: inline-block;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;

const PreviewCard = ({ images, inputState }) => {
  const { title, desc } = inputState;
  return (
    <Popup>
      <CardWrapper>
        <ImageSlides images={images} />
        <p>{title}</p>
        <p>{desc}</p>
      </CardWrapper>
    </Popup>
  );
};

export default PreviewCard;
