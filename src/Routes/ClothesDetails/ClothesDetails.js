import React, { useState } from "react";
import styled from "styled-components";
import ImageSlides from "../../components/ImageSlides";
import { useParams, useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import { Button } from "../../constants/stylingElements";
import { deleteItem } from "../../helpers/firebaseHelpers";
import EditProduct from "../Account/EditProduct";

const CardWrapper = styled.div`
  width: 500px;
  max-width: 80%;
  background: white;
  border-radius: 20px;
  margin-top: 5.5rem;
  margin-bottom: 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
  padding: 1rem;
  .buttons {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
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

  const handleEditClick = (e) => {
    e.stopPropagation();
    setEdit(true);
  };

  const handleEditExit = (e) => {
    setEdit(false);
  };

  return (
    <>
      <CardWrapper onClick={handleEditExit}>
        <ImageSlides images={images} />
        <p>{title}</p>
        <p>{desc}</p>
        {isAuthenticated && currentUserId === owner ? (
          <div className="buttons">
            <Button className="button" onClick={handleEditClick}>
              Edit
            </Button>
            <Button className="button" onClick={deleteFromDb}>
              Delete
            </Button>
          </div>
        ) : null}
      </CardWrapper>
      {edit ? (
        <EditProduct
          setEdit={setEdit}
          images={images}
          initialInputState={cloth}
        ></EditProduct>
      ) : null}
    </>
  );
};

export default ClothesDetails;
