import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCategory, getFirst10 } from "../../helpers/firebaseHelpers";
import ClothCard from "../../components/ClothCard";
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
  const [items, setItems] = useState("");
  const history = useHistory();

  console.log(getFirst10());

  useEffect(() => {
    const func = async () => {
      const data = await getFirst10();
      setItems(data);
    };
    func();
  }, []);

  const handleInput = async (e) => {
    const input = e.target.value.toLowerCase();
    const data = await getCategory(input);
    console.log(data);
    if (data.length > 0) {
      setItems(data);
    }
    setSearch(input);
  };

  const directToDetails = (e) => {
    e.preventDefault();
    let id = e.target.value;
    console.log(items);
    //using local storage to get the item as useParams has issues when refreshing page or entering via direct link - product wont update if is updated in store unless we reenter via search and filter page
    items.map((item) =>
      item.id === id ? localStorage.setItem(id, JSON.stringify(item)) : null
    );
    history.push(`items/${id}`);
  };

  return (
    <Wrapper>
      <SearchForm handleInput={handleInput} />
      <ClothWrapper>
        <h1>Here are the Clothes</h1>
        <ClothDisplay>
          {items
            ? Object.keys(items).map((key) => (
                <ClothCard
                  key={key}
                  id={items[key].id}
                  desc={items[key].desc}
                  title={items[key].title}
                  images={items[key].images}
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
