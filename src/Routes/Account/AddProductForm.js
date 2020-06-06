import React, { useState } from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
import { seedDatabase } from "../../helpers/firebaseHelpers";
import ImageSlides from "../../components/ImageSlides";

const FormWrapper = styled.div`
  .desc {
    height: 4rem;
    @media (min-height: 800px) {
      height: 8rem;
    }
  }
  .upload {
  }
`;

const AddProductForm = ({
  onSubmit,
  onChange,
  handleImages,
  inputState,
  handleUpload,
  collectCategoryValue,
  preview,
}) => {
  const { title, desc, category, image } = inputState;

  return (
    <FormWrapper>
      <Form>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            className="category"
            required
            as="select"
            onChange={collectCategoryValue}
          >
            <option disabled>Choose One</option>
            <option>T-Shirts</option>
            <option>Shirts</option>
            <option>Jumpers</option>
            <option>Hats</option>
            <option>Scarfs</option>
          </Form.Control>
        </Form.Group>
        <FormGroup controlId="title">
          <Form.Label>Title</Form.Label>
          <FormControl
            required
            onChange={onChange}
            type="textarea"
            value={title}
          />
        </FormGroup>
        <FormGroup controlId="desc">
          <Form.Label>Description</Form.Label>
          <FormControl
            className="desc"
            required
            onChange={onChange}
            type="textarea"
            value={desc}
          />
        </FormGroup>
        <FormGroup className="images" controlId="file">
          <FormControl
            className="upload"
            required
            onChange={handleImages}
            type="file"
            multiple
          />
        </FormGroup>
        <Button variant="primary" type="submit" onClick={preview}>
          Preview
        </Button>
        <Button variant="primary" type="submit" disabled onClick={seedDatabase}>
          Seed DB
        </Button>
        <Button variant="primary" type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </FormWrapper>
  );
};

export default AddProductForm;
