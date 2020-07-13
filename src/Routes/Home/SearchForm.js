import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const FormWrapper = styled.div`
  .select {
    font-size: 10px;
    &:focus,
    &:active {
      border: 1px solid #ced4da;
      box-shadow: none;
    }
  }
`;

export default function SearchForm({ handleInput }) {
  return (
    <FormWrapper>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control className="select" as="select" onChange={handleInput}>
            <option>Select A Category</option>
            <option>Flowers</option>
            <option>Fruit trees</option>
            <option>Tropical Plants</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </FormWrapper>
  );
}
