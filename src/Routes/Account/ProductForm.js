import React from "react";
import { Form, FormGroup, FormControl } from "react-bootstrap";
import { Button } from "../../constants/stylingElements";
import styled from "styled-components";
// import { seedDatabase } from "../../helpers/firebaseHelpers";
import { LoadingButton } from "../../components/Loading";

const FormWrapper = styled.div`
  .desc {
    height: 4rem;
    @media (min-height: 800px) {
      height: 8rem;
    }
  }
  .upload {
  }
  .buttons {
    display: flex;
    justify-content: space-between;
  }
`;

const ProductForm = ({
  onSubmit,
  onChange,
  handleImages,
  inputState,
  isLoading,
  collectCategoryValue,
  preview,
  filesRequired,
}) => {
  const { title, desc } = inputState;

  return (
    <FormWrapper>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
            className="category"
            required
            as="select"
            onChange={collectCategoryValue}
          >
            <option disabled> Choose One</option>
            <option>Flowers</option>
            <option>Fruit Trees</option>
            <option>Tropical Plants</option>
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
            required={filesRequired}
            onChange={handleImages}
            type="file"
            multiple
          />
        </FormGroup>
        <div className="buttons">
          <Button variant="primary" type="submit" onClick={preview}>
            Preview
          </Button>
          <LoadingButton
            text="Submit"
            isLoading={isLoading}
            type="submit"
          ></LoadingButton>
        </div>
      </Form>
      {/* <Button variant="primary" onClick={seedDatabase}>
        Seed
      </Button> */}
    </FormWrapper>
  );
};

export default ProductForm;
