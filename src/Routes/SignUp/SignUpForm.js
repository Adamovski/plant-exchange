import React from "react";
import { Form } from "react-bootstrap";
import { LoadingButton } from "../../components/Loading";
import styled from "styled-components";

const FormWrapper = styled.div`
  width: 80%;
`;

const SignUpForm = ({
  inputState,
  onChange,
  onSubmit,
  isInvalid,
  isLoading,
}) => {
  return (
    <FormWrapper>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={onChange}
            type="text"
            placeholder="Full Name"
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={onChange}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group controlId="passwordOne">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={onChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="passwordTwo">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={onChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <LoadingButton
          disabled={isInvalid}
          type="submit"
          text="Sign Up"
          isLoading={isLoading}
        ></LoadingButton>
        {inputState.error && <p>{inputState.error.message}</p>}
      </Form>
    </FormWrapper>
  );
};

export default SignUpForm;
