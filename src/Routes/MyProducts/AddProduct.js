import React, { useState } from "react";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
import base from "../../base";

const NewProductWrapper = styled.div`
  margin: 0 auto;
  max-width: 50%;
  .attachment {
    margin: 0 auto;
  }
`;

export default function NewProduct() {
  const [category, setCategory] = useState("");
  const [desc, setDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [images, setImages] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCategory = (e) => {
    let input = e.target.value.toLowerCase();
    setCategory(input);
    console.log(input);
  };

  const handleDesc = (e) => {
    let input = e.target.value.toLowerCase();
    setDesc(input);
    console.log(input);
  };

  const handleLongDesc = (e) => {
    let input = e.target.value.toLowerCase();
    setLongDesc(input);
    console.log(input);
  };

  const handleImages = (e) => {
    let input = e.target.files;
    let inputArray = [...input].map((item) => item.name);
    console.log(inputArray);
    setImages(inputArray);
  };

  const onSubmit = () => {
    base.syncState()
  };

  return (
    <NewProductWrapper>
      <Form>
        <Form.Group controlId="setCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control required as="select" onChange={handleCategory}>
            <option disabled>Choose One</option>
            <option>T-Shirt</option>
            <option>Shirt</option>
            <option>Jumper</option>
            <option>Hat</option>
            <option>Scarf</option>
          </Form.Control>
        </Form.Group>
        <FormGroup controlId="setDesc">
          <Form.Label>Title</Form.Label>
          <FormControl required onChange={handleDesc} type="textarea" />
        </FormGroup>
        <FormGroup controlId="setLongDesc">
          <Form.Label>Description</Form.Label>
          <FormControl onChange={handleLongDesc} type="textarea" />
        </FormGroup>
        <FormGroup className="setImages" controlId="file">
          <Form.Label>Attachment</Form.Label>
          <FormControl required onChange={handleImages} type="file" multiple />
        </FormGroup>
        {/* <LoaderButton
          block
          type="submit"
          bsSize="large"
          bsStyle="primary"
          //   isLoading={isLoading}
          //   disabled={!validateForm()}
        >
          Create
        </LoaderButton> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </NewProductWrapper>
  );
}
