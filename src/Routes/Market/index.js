import React from "react";
import plants from "../../samplePlants";
import PlantCard from "./PlantCard";
import Wrapper from "../../constants/Wrapper";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const PlantWrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  h1 {
    text-align: center;
  }
`;
const PlantDisplay = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Market = () => {
  return (
    <Wrapper>
      <SearchForm />
      <PlantWrapper>
        <h1>Here are the Plants</h1>
        <PlantDisplay>
          {Object.keys(plants).map((key) => (
            <PlantCard key={key} index={key} plants={plants[key]} />
          ))}
        </PlantDisplay>
      </PlantWrapper>
    </Wrapper>
  );
};

export default Market;
