import React from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
import { writeItemData } from "../../helpers/firebaseHelpers";

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
}) => {
  const { title, desc, category, image } = inputState;

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Control required as="select" onChange={onChange}>
          <option disabled>Choose One</option>
          <option>T-Shirt</option>
          <option>Shirt</option>
          <option>Jumper</option>
          <option>Hat</option>
          <option>Scarf</option>
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
        <Form.Label>Attachment</Form.Label>
        <FormControl required onChange={handleImages} type="file" multiple />
      </FormGroup>
      <Button variant="primary" type="submit" onClick={handleUpload}>
        Upload
      </Button>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddProductForm;
