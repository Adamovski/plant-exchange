import React, { useState } from "react";
import styled from "styled-components";
import {
  writeItemData,
  uploadImageAsPromise,
  editItemData,
} from "../../helpers/firebaseHelpers";
import EditProductForm from "./EditProductForm";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import PreviewCard from "./PreviewCard";
import DragAndDrop from "../../components/DragAndDrop";
import FileList from "../../components/FileList";

const NewProductWrapper = styled.div`
  background: white;
  position: absolute;
  top: 56px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 500px;
  max-width: 95%;
  h2 {
    font-size: 1.75rem;
  }
  .attachment {
    margin: 0 auto;
  }
`;

const EditProduct = ({ initialInputState }) => {
  const history = useHistory();
  const [inputState, setInputState] = useState(initialInputState);
  const { category, title, desc, images } = inputState;
  const [imagesArray, setImagesArray] = useState(images);
  const { currentUserId } = useAppContext();
  const [loadPreview, setLoadPreview] = useState(false);
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

    return fileUrlArray;
  };

  //upload images and then push input to firebase database
  const onSubmit = (e) => {
    let updatedImages = images;
    console.log(images);
    e.preventDefault();
    uploadImages()
      .then((res) => {
        updatedImages = [...updatedImages, ...res];
      })
      .then(() => {
        editItemData(
          initialInputState.id,
          category,
          title,
          desc,
          updatedImages,
          currentUserId
        );
      });
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
        <h2>Edit your product</h2>
        <EditProductForm
          onChange={onChange}
          inputState={inputState}
          onSubmit={onSubmit}
          handleImages={handleImages}
          collectCategoryValue={collectCategoryValue}
          preview={openPreview}
        />
      </NewProductWrapper>
      {loadPreview ? (
        <PreviewCard
          inputState={inputState}
          images={images}
          closePreview={closePreview}
        />
      ) : null}
    </>
  );
};

export default EditProduct;
