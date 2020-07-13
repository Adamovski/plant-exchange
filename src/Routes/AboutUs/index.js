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
        <h2>Make the world green again</h2>
        <p>
          The Plant Exchange was formed by a group of friends passionate about
          sustainabililty and the circular economy!{" "}
        </p>
        <p>
          We believe in local communitites and that every city should be self
          green! What better way to start than in our own homes, gardens and
          courtyards!
        </p>
        <p>
          We want to promote the idea of taking care of not only your own garden
          but the space around you! Have any extra cuttings from your own
          plants? Share them with people! And let's start making the city green
          together!
        </p>
      </div>
    </AboutUsWrapper>
  );
};

export default AboutUs;
