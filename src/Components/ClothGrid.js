import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import ClothCard from "./ClothCard";

const ClothDisplay = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  grid-column: 2/4;
  display: grid;
  grid-gap: 1rem;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ClothGrid = ({ items }) => {
  const history = useHistory();
  const params = useParams();

  const directToDetails = (e) => {
    console.log(params);
    e.preventDefault();
    let id = e.currentTarget.dataset.id;
    //using local storage to get the item as useParams has issues when refreshing page or entering via direct link - product wont update if is updated in store unless we reenter via search and filter page
    items.map((item) =>
      item.id === id ? localStorage.setItem(id, JSON.stringify(item)) : null
    );
    history.push(`items/${id}`);
  };

  return (
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
  );
};

export default ClothGrid;
