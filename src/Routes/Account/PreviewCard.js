import React from "react";
import styled from "styled-components";
import ImageSlides from "../../components/ImageSlides";
import { Button } from "../../constants/stylingElements";

const Popup = styled.div`
  background: white;
  position: absolute;
  border-radius: 20px;
  top: 88px;
  left: 50%;
  height: 80vh;
  transform: translate(-50%);
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

const PreviewCard = ({ images, inputState, closePreview }) => {
  const { title, desc } = inputState;
  return (
    <Popup>
      <CardWrapper>
        <ImageSlides images={images} />
        <p>{title}</p>
        <p>{desc}</p>
        <Button onClick={closePreview}>Close</Button>
      </CardWrapper>
    </Popup>
  );
};

export default PreviewCard;
