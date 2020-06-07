import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { Button } from "../../constants/stylingElements";

const FormWrapper = styled.div`
  margin: 2rem auto;
  width: 40%;
`;

const SignInForm = ({ inputState, onChange, onSubmit, isInvalid }) => {
  const { email, password } = inputState;
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
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={onChange}
            type="password"
            placeholder="Password"
            value={password}
          />
        </Form.Group>
        <Button disabled={isInvalid} type="submit">
          Sign In
        </Button>
        {inputState.error && <p>{inputState.error.message}</p>}
      </Form>
    </FormWrapper>
  );
};

export default SignInForm;
