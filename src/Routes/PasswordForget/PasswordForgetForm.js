import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "../../constants/stylingElements";
import styled from "styled-components";

const FormWrapper = styled.div`
  margin: 2rem auto;
  width: 40%;
`;

const PasswordForgetForm = ({ onSubmit, onChange, isInvalid, inputState }) => {
  const { email, error } = inputState;
  return (
    <FormWrapper>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={onChange}
            type="email"
            placeholder="Enter email"
            value={email}
          />
        </Form.Group>
        <Button disabled={isInvalid} variant="primary" type="submit">
          Submit
        </Button>
        {error && <p>{error.message}</p>}
      </Form>
    </FormWrapper>
  );
};

export default PasswordForgetForm;
