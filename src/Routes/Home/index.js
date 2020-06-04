import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import clothes from "../../sampleClothes";
import ClothCard from "./ClothCard";
import Wrapper from "../../constants/Wrapper";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const ClothWrapper = styled.div`
  width: 80%;
  margin: 2rem auto;
  h1 {
    text-align: center;
  }
`;
const ClothDisplay = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Home = () => {
  const [search, setSearch] = useState("");
  const { setItemId } = useAppContext();
  const history = useHistory();

  const handleInput = (e) => {
    let input = e.target.value.toLowerCase();
    setSearch(input);
  };

  const filteredClothes = clothes.filter(
    (cloth) => cloth.category.indexOf(search) > -1
  );

  const directToDetails = (e) => {
    let id = e.target.value;
    setItemId(id);
    console.log(id);
    history.push(`items/${id}`);
  };

  return (
    <Wrapper>
      <SearchForm handleInput={handleInput} />
      <ClothWrapper>
        <h1>Here are the Clothes</h1>
        <ClothDisplay>
          {search.length > 0
            ? Object.keys(
                clothes.filter((cloth) => cloth.category.indexOf(search) > -1)
              ).map((key) => (
                <ClothCard
                  key={key}
                  index={key}
                  clothes={filteredClothes[key]}
                  directToDetails={directToDetails}
                />
              ))
            : null}
        </ClothDisplay>
      </ClothWrapper>
    </Wrapper>
  );
};

export default Home;
