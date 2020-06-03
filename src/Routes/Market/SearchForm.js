import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function SearchForm({ handleInput }) {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Search for your clothes!</Form.Label>
        <Form.Control
          type="text"
          placeholder="shirt"
          onChange={handleInput}
        />
      </Form.Group>
    </Form>
  );
}
