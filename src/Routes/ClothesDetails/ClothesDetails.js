import React, { useState } from "react";
import styled from "styled-components";
import ImageSlides from "../../components/ImageSlides";
import { useParams, useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import { Button } from "react-bootstrap";
import { deleteItem } from "../../helpers/firebaseHelpers";
import EditProduct from "../Account/EditProduct";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  padding: 1rem;
  img {
    display: inline-block;
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
`;

const ClothesDetails = ({ cloth }) => {
  const { isAuthenticated, currentUserId } = useAppContext();
  const { images, title, desc, owner, id } = cloth;
  const [edit, setEdit] = useState(false);
  const history = useHistory();
  const params = useParams();
  console.log(params);
  console.log(isAuthenticated);
  console.log(currentUserId);

  const deleteFromDb = () => {
    deleteItem(id, currentUserId);
    localStorage.removeItem(id);
    history.push("/my-items");
  };

  const handleEditClick = () => {
    setEdit(true);
  };

  return (
    <>
      {edit ? (
        <EditProduct initialInputState={cloth}></EditProduct>
      ) : (
        <CardWrapper>
          <ImageSlides images={images} />
          <p>{title}</p>
          <p>{desc}</p>
          {isAuthenticated && currentUserId === owner ? (
            <>
              <Button onClick={handleEditClick}>Edit</Button>
              <Button onClick={deleteFromDb}>Delete</Button>
            </>
          ) : null}
        </CardWrapper>
      )}
    </>
  );
};

export default ClothesDetails;
