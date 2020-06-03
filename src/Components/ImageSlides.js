import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Img = styled.img`
  padding: 5px;
  width: 100%;
  flex: 1;
  height: auto;
  &.active {
    opacity: 0.3;
  }
  &.fade-appear {
    opacity: 0;
    z-index: 1;
  }
  &.fade-appear.fade-appear-active {
    opacity: 1;
    transition: opacity 250ms linear;
  }
  &.fade-enter {
    opacity: 0;
    z-index: 1;
  }
  &.fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms linear 250ms;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity 250ms linear;
  }
  &.fade-exit-done {
    opacity: 0;
  }
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
    ${"" /* margin-top: 25vh; */}
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
      display: grid;
      grid-template-columns: repeat(${images.length}, 1fr);
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
            if (i === index) {
              return (
                <Img src={item} data-index={i} key={i} className="active" />
              );
            } else if (index < i && i < index + images.length) {
              return <Img src={item} data-index={i} key={i} />;
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
