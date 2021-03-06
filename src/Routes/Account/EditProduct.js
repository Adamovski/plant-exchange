import React, { useState } from "react";
import styled from "styled-components";
import {
  uploadImageAsPromise,
  editItemData,
} from "../../helpers/firebaseHelpers";
import ProductForm from "./ProductForm";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import PreviewCard from "./PreviewCard";

const NewProductWrapper = styled.div`
  background: white;
  position: absolute;
  border-radius: 20px;
  top: 88px;
  left: 50%;
  height: 80vh;
  transform: translate(-50%);
  padding: 1rem 2rem;
  width: 95%;
  max-width: 500px;

  h2 {
    font-size: 1.75rem;
  }
  .attachment {
    margin: 0 auto;
  }
`;

const EditProduct = ({ initialInputState, setEdit }) => {
  const history = useHistory();
  const [inputState, setInputState] = useState(initialInputState);
  const { category, title, desc, images } = inputState;
  const [imagesArray, setImagesArray] = useState(initialInputState.images);
  const { currentUserId } = useAppContext();
  const [filesUploaded, setFilesUploaded] = useState(false);
  const [loadPreview, setLoadPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    setFilesUploaded(true);
    setImagesArray(images);
  };

  //upload images to storage -function is a asynchronous function and returns a promise
  //the resolution of this promise is the uploadedImages URL ARRAY
  const uploadImages = async () => {
    console.log(imagesArray);
    const fileUrlArray = [];
    if (filesUploaded) {
      for (let i = 0; i < imagesArray.length; i++) {
        let imageFile = imagesArray[i];
        await uploadImageAsPromise(imageFile).then((res) => {
          fileUrlArray.push(res);
        });
      }
      setInputState({ ...inputState, images: fileUrlArray });
    }
    return fileUrlArray;
  };

  //upload images and then push input to firebase database
  const onSubmit = (e) => {
    setIsLoading(true);
    let updatedImages = images;
    // console.log(images);
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
        console.log("edit complete");
        localStorage.setItem(
          initialInputState.id,
          JSON.stringify({
            id: initialInputState.id,
            category: category,
            title: title,
            desc: desc,
            images: updatedImages,
            owner: currentUserId,
          })
        );
        history.push(`/items/${initialInputState.id}`);
        setEdit(false);
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
        <h2>Edit your Plant</h2>
        <ProductForm
          onChange={onChange}
          inputState={inputState}
          onSubmit={onSubmit}
          handleImages={handleImages}
          collectCategoryValue={collectCategoryValue}
          preview={openPreview}
          filesRequired={false}
          isLoading={isLoading}
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
