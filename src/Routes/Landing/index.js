import React from "react";
import styled from "styled-components";

const LandingWrapper = styled.div`
  margin-top: -56px;
  background: rgba(0, 0, 0, 0.4)
    url(${require("../../assets/images/suitcase.jpg")});
  background-blend-mode: darken;
  background-size: cover;
  object-fit: cover;
  width: 100%;
  height: 100vh;
  z-index: -10;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    color: white;
  }
  h1 {
    text-align: center;
  }
`;

const LandingPage = () => {
  return (
    <LandingWrapper>
      <h1 className="title">
        Share your clothes
        <br /> with the world!
      </h1>
    </LandingWrapper>
  );
};

export default LandingPage;
