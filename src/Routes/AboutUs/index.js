import React from "react";
import styled from "styled-components";

const AboutUsWrapper = styled.div`
  width: 95%;
  background: rgba(256, 256, 256, 0.9);
  border-radius: 20px;
  margin-top: 5.5rem;
  margin-bottom: 2rem;
  padding: 2rem;
  text-align: justify;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .inner {
    max-width: 500px;
  }
  h2 {
    margin-bottom: 2rem;
  }
`;

const AboutUs = () => {
  return (
    <AboutUsWrapper>
      <div className="inner">
        <h2>Clothes Can Make A Difference</h2>
        <p>
          The Cloth Exchnage was formed by a group of friends passionate about
          sustainabililty and the circular economy!{" "}
        </p>
        <p>
          We believe in local communitites and that every city should be self
          sufficient! We asked ourselves the question why is it that despite
          every community being filled with people with a variety of skills we
          still dress in imported clothing often produced by slave labour!
        </p>
        <p>
          We want to put and end to this by promoting local crafstmen and
          tailors and sustainabililty at the same time!
        </p>

        <p>What better way to do that than by upCycling Clothes!</p>
      </div>
    </AboutUsWrapper>
  );
};

export default AboutUs;
