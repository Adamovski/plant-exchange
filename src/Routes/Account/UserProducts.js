import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Button } from "../../constants/stylingElements";
import { useAppContext } from "../../libs/contextLib";
import { getUserItems } from "../../helpers/firebaseHelpers";
import styled from "styled-components";
import ClothCard from "../../components/ClothCard";
import { useHistory } from "react-router-dom";
import ClothGrid from "../../components/ClothGrid";

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
  const history = useHistory();
  const [userItems, setUserItems] = useState("");
  const { currentUserId } = useAppContext();

  useEffect(() => {
    const func = async () => {
      const myItems = await getUserItems(currentUserId);
      setUserItems(myItems);
    };
    func();
  }, [userItems]);

  const directToDetails = (e) => {
    e.preventDefault();
    let id = e.target.value;
    console.log(userItems);
    //using local storage to get the item as useParams has issues when refreshing page or entering via direct link - product wont update if is updated in store unless we reenter via search and filter page
    userItems.map((item) =>
      item.id === id ? localStorage.setItem(id, JSON.stringify(item)) : null
    );
    history.push(`items/${id}`);
  };

  return (
    <>
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
    </>
  );
};

export default UserProducts;
