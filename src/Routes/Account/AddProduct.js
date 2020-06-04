import React, { useState } from "react";
import firebase from "firebase";
import * as ROUTES from "../../constants/routes";
import styled from "styled-components";
import {
  writeItemData,
  uploadFiles,
  uploadImageAsPromise,
} from "../../helpers/firebaseHelpers";
import AddProductForm from "./AddProductForm";
import { useHistory } from "react-router-dom";

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
  const { category, title, desc, images } = inputState;
  const [imageAsFile, setImageAsFile] = useState("");
  const [imagesArray, setImagesArray] = useState("");

  const onChange = (e) => {
    const { id, value } = e.target;
    setInputState({ ...inputState, [id]: value });
  };

  const handleImages = (e) => {
    //get the image
    let input = e.target.files[0];
    const image = e.target.files[0];
    const images = [...e.target.files];
    setImagesArray(images);
    setImageAsFile(image);
    console.log(images);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    writeItemData(inputState, firebase);
    setInputState(initialInputState);
    history.push(ROUTES.HOME);
    console.log(writeItemData);
  };

  const upSubmit = (e) => {
    e.preventDefault();
    uploadAll();
  };

  const uploadAll = async () => {
    //Get files
    const fileUrlArray = [];
    for (let i = 0; i < imagesArray.length; i++) {
      let imageFile = imagesArray[i];
      await uploadImageAsPromise(firebase, imageFile).then((res) => {
        fileUrlArray.push(res);
      });
    }
    setInputState({ ...inputState, images: fileUrlArray });
  };

  return (
    <NewProductWrapper>
      <h2>Add new product</h2>
      <AddProductForm
        onChange={onChange}
        inputState={inputState}
        onSubmit={onSubmit}
        handleImages={handleImages}
        handleUpload={upSubmit}
      />
    </NewProductWrapper>
  );
}
