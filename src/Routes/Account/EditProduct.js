import React, { useState } from "react";
import styled from "styled-components";
import {
  writeItemData,
  uploadImageAsPromise,
} from "../../helpers/firebaseHelpers";
import EditProductForm from "./AddProductForm";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";

const NewProductWrapper = styled.div`
  margin: 0 auto;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 400px;
  max-width: 80%;
  h2 {
    font-size: 1.75rem;
  }
  .attachment {
    margin: 0 auto;
  }
`;

const EditProduct = ({initialInputState}) => {
  const history = useHistory();
  const [inputState, setInputState] = useState(initialInputState);
  const [imagesArray, setImagesArray] = useState("");
  const { category, title, desc, images } = inputState;
  const { currentUserId } = useAppContext();

  const onChange = (e) => {
    const { id, value } = e.target;
    setInputState({ ...inputState, [id]: value });
  };

  const collectCategoryValue = (e) => {
    const { id, value } = e.target;
    setInputState({ ...inputState, [id]: value.toLowerCase() });
  };

  //get the image file details and push to array when attached
  const handleImages = (e) => {
    const images = [...e.target.files];
    setImagesArray(images);
    console.log(images);
  };

  //upload images to storage -function is a asynchronous function and returns a promise
  //the resolution of this promise is the uploadedImages URL ARRAY
  const uploadImages = async () => {
    // e.preventDefault();
    //Get files
    const fileUrlArray = [];
    for (let i = 0; i < imagesArray.length; i++) {
      let imageFile = imagesArray[i];
      await uploadImageAsPromise(imageFile).then((res) => {
        fileUrlArray.push(res);
      });
    }
    setInputState({ ...inputState, images: fileUrlArray });
    return fileUrlArray;
  };

  //upload images and then push input to firebase database
  const onSubmit = (e) => {
    e.preventDefault();
    uploadImages().then((res) => {
      writeItemData(category, title, desc, res, currentUserId);
    });
    setInputState(initialInputState);
    // history.push(ROUTES.HOME);
  };

  return (
    <NewProductWrapper>
      <h2>Edit your product</h2>
      <EditProductForm
        onChange={onChange}
        inputState={inputState}
        onSubmit={onSubmit}
        handleImages={handleImages}
        collectCategoryValue={collectCategoryValue}
        // handleUpload={uploadAll}
      />
    </NewProductWrapper>
  );
};

export default EditProduct;
