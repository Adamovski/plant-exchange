import React, { useState } from "react";
import * as ROUTES from "../../constants/routes";
import styled from "styled-components";
import {
  writeItemData,
  uploadImageAsPromise,
} from "../../helpers/firebaseHelpers";
import AddProductForm from "./AddProductForm";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";

const NewProductWrapper = styled.div`
  margin: 0 auto;
  max-width: 50%;
  .attachment {
    margin: 0 auto;
  }
`;

export default function NewProduct() {
  const initialInputState = {
    category: "",
    title: "",
    desc: "",
    images: [],
  };
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
      <h2>Add new product</h2>
      <AddProductForm
        onChange={onChange}
        inputState={inputState}
        onSubmit={onSubmit}
        handleImages={handleImages}
        collectCategoryValue={collectCategoryValue}
        // handleUpload={uploadAll}
      />
    </NewProductWrapper>
  );
}
