import React from "react";
import { Form } from "react-bootstrap";
import { LoadingButton } from "../../components/Loading";
import styled from "styled-components";

const FormWrapper = styled.div`
  margin: 2rem auto;
  width: 80%;
  .form {
    display: flex;
    flex-direction: column;
  }
`;

const PasswordForgetForm = ({
  onSubmit,
  onChange,
  isInvalid,
  inputState,
  isLoading,
}) => {
  const { email, error } = inputState;
  return (
    <FormWrapper>
      <Form className="form" onSubmit={onSubmit}>
        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={onChange}
            type="email"
            placeholder="Enter email"
            value={email}
          />
        </Form.Group>
        <LoadingButton
          disabled={isInvalid}
          isLoading={isLoading}
          text="Submit"
          type="submit"
        ></LoadingButton>
        {error && <p>{error.message}</p>}
      </Form>
    </FormWrapper>
  );
};

export default PasswordForgetForm;
