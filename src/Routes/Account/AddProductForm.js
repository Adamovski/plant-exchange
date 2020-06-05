import React from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
import { seedDatabase } from "../../helpers/firebaseHelpers";

const NewProductWrapper = styled.div`
  margin: 0 auto;
  max-width: 50%;
  .attachment {
    margin: 0 auto;
  }
`;

const AddProductForm = ({
  onSubmit,
  onChange,
  handleImages,
  inputState,
  handleUpload,
  collectCategoryValue,
}) => {
  const { title, desc, category, image } = inputState;

  return (
    <Form>
      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control required as="select" onChange={collectCategoryValue}>
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
          required
          onChange={onChange}
          type="textarea"
          value={desc}
        />
      </FormGroup>
      <FormGroup className="images" controlId="file">
        <FormControl required onChange={handleImages} type="file" multiple />
      </FormGroup>
      <Button variant="primary" type="submit" onClick={onSubmit}>
        Submit
      </Button>
      <Button variant="primary" type="submit" onClick={seedDatabase}>
        Seed DB
      </Button>
    </Form>
  );
};

export default AddProductForm;
