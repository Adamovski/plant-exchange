import React, { useState } from "react";
import styled from "styled-components";

const Img = styled.img`
  padding: 5px;
  width: 100%;
  flex: 1;
  height: auto;
`;

const Btn = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  display: inline-block;
  border: none;
  font-size: 30px;
  color: black;
  opacity: 0.2;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
`;

const PrevBtn = styled(Btn)`
  height: 100%;
`;

const NextBtn = styled(Btn)`
  height: 100%;
`;

const ImageSlides = ({ images }) => {
  const SlideWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .slidingThumbnails {
      width: 95%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .images {
      display: flex;
      overflow: hidden;
      flex-wrap: none;
      width: 200px;
      @media (min-width: 600px) {
        width: auto;
        display: grid;
        overflow: visible;
        ${images.length > 1
          ? `grid-template-columns: repeat(2, 1fr)`
          : `grid-template-columns: 1fr`}
      }
    }
  `;

  const [index, setIndex] = useState(0);

  //display next image as main image
  const forwardClick = (e) => {
    e.stopPropagation();
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    console.log(index);
  };

  //display previous image as clicked image
  const backClick = (e) => {
    e.stopPropagation();
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  };

  //make ImageArray a loop
  const newImageArray = [...images];
  newImageArray.push(...images.slice(0, images.length - 1));

  return (
    <SlideWrapper>
      <div className="slidingThumbnails">
        <PrevBtn className="fas fa-arrow-left" onClick={backClick}></PrevBtn>
        <div className="images">
          {newImageArray.map((item, i) => {
            if ((i === index) | (index < i) && i < index + 2) {
              return <Img src={item} data-index={i} key={i} />;
            } else {
              return null;
            }
          })}
        </div>
        <NextBtn
          className="fas fa-arrow-right"
          onClick={forwardClick}
        ></NextBtn>
      </div>
    </SlideWrapper>
  );
};

export default ImageSlides;
