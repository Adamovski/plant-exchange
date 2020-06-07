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
import PreviewCard from "./PreviewCard";

const NewProductWrapper = styled.div`
  margin: 0 auto;
  margin-top: 56px;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 400px;
  max-width: 80%;
  background: white;
  border-radius: 20px;
  padding: 2rem;
  h2 {
    font-size: 1.75rem;
  }
  .attachment {
    margin: 0 auto;
  }
`;

const NewProduct = () => {
  const initialInputState = {
    category: "",
    title: "",
    desc: "",
    images: [],
  };
  const history = useHistory();
  const [inputState, setInputState] = useState(initialInputState);
  const [imagesArray, setImagesArray] = useState("");
  const [loadPreview, setLoadPreview] = useState(false);
  const [files, setFiles] = useState([]);
  const { category, title, desc } = inputState;
  const { currentUserId } = useAppContext();
  const validate = category && title && desc && imagesArray;

  //collect input values
  const onChange = (e) => {
    const { id, value } = e.target;
    setInputState({ ...inputState, [id]: value });
  };

  //get the category value
  const collectCategoryValue = (e) => {
    const { id, value } = e.target;
    setInputState({ ...inputState, [id]: value.toLowerCase() });
  };

  //get the image file details and push to array when attached
  const handleImages = (e) => {
    const fileArray = e.target.files;
    const images = [...fileArray];
    const uploadedFilesPlaceHolder = [];
    images.map((item) =>
      uploadedFilesPlaceHolder.push(URL.createObjectURL(item))
    );
    setFiles(uploadedFilesPlaceHolder);
    setImagesArray(images);
  };

  //upload images to storage -function is a asynchronous function and returns a promise
  //the resolution of this promise is the uploadedImages URL ARRAY
  const uploadImages = async () => {
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
    e.stopPropagation();
    e.preventDefault();
    if (validate) {
      uploadImages().then((res) => {
        writeItemData(category, title, desc, res, currentUserId);
      });
      setInputState(initialInputState);
    } else alert("You forgot something");
    // history.push(ROUTES.HOME);
  };

  const openPreview = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (validate) {
      setLoadPreview(true);
    } else alert("You forgot something");
  };

  const closePreview = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setLoadPreview(false);
  };

  return (
    <>
      <NewProductWrapper>
        <h2>Add new product</h2>
        <AddProductForm
          files={files}
          onChange={onChange}
          inputState={inputState}
          onSubmit={onSubmit}
          handleImages={handleImages}
          collectCategoryValue={collectCategoryValue}
          preview={openPreview}
          setLoadPreview={setLoadPreview}
          // handleUpload={uploadAll}
        />
      </NewProductWrapper>
      {loadPreview ? (
        <PreviewCard
          inputState={inputState}
          images={files}
          closePreview={closePreview}
        />
      ) : null}
    </>
  );
};

export default NewProduct;
