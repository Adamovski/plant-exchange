import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCategory, getFirst10 } from "../../helpers/firebaseHelpers";
import ClothCard from "../../components/ClothCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const ClothWrapper = styled.div`
  padding-top: 2rem;
  overfow: hidden;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 570px) minmax(auto, 570px) 1fr;
  justify-items: center;
  .header {
    grid-column: 2/4;
    h2 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
  }
`;
const ClothDisplay = styled.div`
  margin-top: 2rem;
  grid-column: 2/4;
  display: grid;
  grid-gap: 1rem;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Home = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState("");
  const history = useHistory();

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
    if (data.length > 0) {
      setItems(data);
    }
    setSearch(input);
  };

  const directToDetails = (e) => {
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    //using local storage to get the item as useParams has issues when refreshing page or entering via direct link - product wont update if is updated in store unless we reenter via search and filter page
    items.map((item) =>
      item.id === id ? localStorage.setItem(id, JSON.stringify(item)) : null
    );
    history.push(`items/${id}`);
  };

  return (
    <ClothWrapper>
      <div className="header">
        <h2>Available Clothes</h2>
        <SearchForm handleInput={handleInput} />
      </div>
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
  );
};

export default Home;
