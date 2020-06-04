import React from "react";
import styled from "styled-components";
import Wrapper from "../../constants/Wrapper";
import ImageSlides from "../../components/ImageSlides";

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

const ClothesDetails = ({ cloth }) => {
  const { images, desc, longDesc } = cloth;
  console.log(images);
  return (
    <Wrapper>
      <CardWrapper>
        <ImageSlides images={images} />
        <p>{desc}</p>
        <p>{longDesc}</p>
      </CardWrapper>
    </Wrapper>
  );
};

export default ClothesDetails;
