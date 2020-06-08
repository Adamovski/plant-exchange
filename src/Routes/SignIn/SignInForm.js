import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { LoadingButton } from "../../components/Loading";

const FormWrapper = styled.div`
  width: 80%;
`;

const SignInForm = ({
  inputState,
  onChange,
  onSubmit,
  isInvalid,
  isLoading,
}) => {
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
        <LoadingButton
          isLoading={isLoading}
          disabled={isInvalid}
          type="submit"
          text="Sign In"
        ></LoadingButton>
        {inputState.error && <p>{inputState.error.message}</p>}
      </Form>
    </FormWrapper>
  );
};

export default SignInForm;
