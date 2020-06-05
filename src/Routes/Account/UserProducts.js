import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "react-bootstrap";
import { useAppContext } from "../../libs/contextLib";
import { getUserItems } from "../../helpers/firebaseHelpers";
import styled from "styled-components";
import ClothCard from "../../components/ClothCard";

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

const UserProducts = () => {
  const [userItems, setUserItems] = useState("");
  const { currentUserId } = useAppContext();

  useEffect(() => {
    const func = async () => {
      const myItems = await getUserItems(currentUserId);
      setUserItems(myItems);
    };
    func();
  }, []);

  return (
    <div>
      {userItems.length > 0 ? (
        <ClothDisplay>
          {Object.keys(userItems).map((key) => (
            <ClothCard
              key={key}
              id={userItems[key].id}
              desc={userItems[key].desc}
              title={userItems[key].title}
              images={userItems[key].images}
              // directToDetails={directToDetails}
            />
          ))}
        </ClothDisplay>
      ) : (
        <>
          <p>You don't have any products</p>
          <LinkContainer to={"/add-item"}>
            <Button variant="primary" type="submit">
              Add a new item!
            </Button>
          </LinkContainer>
        </>
      )}
    </div>
  );
};

export default UserProducts;
