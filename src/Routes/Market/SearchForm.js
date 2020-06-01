import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function SearchForm() {
  const [search, setSearch] = useState();
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Wyszukaj Roślinę</Form.Label>
        <Form.Control type="text" placeholder="Hortensja" />
      </Form.Group>
    </Form>
  );
}
