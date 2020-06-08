import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "../../constants/stylingElements";
import { useAppContext } from "../../libs/contextLib";
import { getUserItems } from "../../helpers/firebaseHelpers";
import styled from "styled-components";
import ClothGrid from "../../components/ClothGrid";
import { LoadingPopup } from "../../components/Loading";

const UserWrapper = styled.div`
  width: 95%;
  min-height: 80vh;
  background: rgba(256, 256, 256, 0.9);
  border-radius: 20px;
  margin-top: 5.5rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
  ${(userItems) =>
    !userItems | (userItems.length === 0)
      ? `display:flex;flex-direction:column;justify-content:center;align-items:center;padding-top:0;`
      : `display:static`}
`;

const ItemWrapper = styled.div`
  padding-top: 2rem;
  margin: 0 auto;
  display: flex;
  width: 80%;
  max-width: 600px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

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

const UserProducts = () => {
  const [userItems, setUserItems] = useState("");
  const { currentUserId } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  //load users item list
  useEffect(() => {
    const fetchData = async () => {
      const myItems = await getUserItems(currentUserId);
      setUserItems(myItems);
      setIsLoading(false);
    };
    fetchData();
  }, [currentUserId]);

  return (
    <UserWrapper userItems={userItems}>
      <LoadingPopup isLoading={isLoading} />
      {userItems && userItems.length > 0 ? (
        <>
          <ClothWrapper>
            <div className="header">
              <h2>Your Items</h2>
            </div>
            <ClothGrid items={userItems} />
          </ClothWrapper>
        </>
      ) : (
        <ItemWrapper>
          <p>You don't have any products</p>
          <LinkContainer to={"/add-item"}>
            <Button variant="primary" type="submit">
              Add a new item!
            </Button>
          </LinkContainer>
        </ItemWrapper>
      )}
    </UserWrapper>
  );
};

export default UserProducts;
