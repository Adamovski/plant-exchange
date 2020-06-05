import React from "react";
import { Form } from "react-bootstrap";

export default function SearchForm({ handleInput }) {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Filter</Form.Label>
        <Form.Control as="select" onChange={handleInput}>
          <option>Select A Category</option>
          <option>T-Shirts</option>
          <option>Shirts</option>
          <option>Hats</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
}
