import React, { useState } from "react";
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
  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Market = () => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    let input = e.target.value.toLowerCase();
    setSearch(input);
  };

  const filteredClothes = clothes.filter(
    (cloth) => cloth.category.indexOf(search) > -1
  );

  console.log(clothes);
  // console.log(filteredClothes);
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
                <ClothCard key={key} index={key} clothes={filteredClothes[key]} />
              ))
            : null}
        </ClothDisplay>
      </ClothWrapper>
    </Wrapper>
  );
};

export default Market;
