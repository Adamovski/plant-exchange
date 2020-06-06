import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const FormWrapper = styled.div`
  .select {
    font-size: 10px;
  }
`;

export default function SearchForm({ handleInput }) {
  return (
    <FormWrapper>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control className="select" as="select" onChange={handleInput}>
            <option>Select A Category</option>
            <option>T-Shirts</option>
            <option>Shirts</option>
            <option>Hats</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </FormWrapper>
  );
}
