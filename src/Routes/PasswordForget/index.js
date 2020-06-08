import React, { useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import PasswordForgetForm from "./PasswordForgetForm";
import styled from "styled-components";
import * as ROUTES from "../../constants/routes";

const ForgotonWrapper = styled.div`
  height: 80vh;
  margin: 0 auto;
  margin-top: 56px;
  padding-top: 2rem;
  padding-bottom: 2rem;
  width: 400px;
  max-width: 80%;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h2 {
    color: black;
    font-size: 1.75rem;
  }
`;

const PasswordForgetPage = () => {
  const history = useHistory();
  const initialInputState = {
    email: "",
    error: null,
  };
  const [inputState, setInputState] = useState(initialInputState);
  const [isLoading, setIsLoading] = useState(false);
  const { email } = inputState;
  const isInvalid = email === "";

  const onChange = (e) => {
    const { id, value } = e.target;
    setInputState({ ...inputState, [id]: value });
  };

  const sendResetEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("email sent");
        setInputState({ ...initialInputState });
        history.push(ROUTES.LANDING);
      })
      .catch((err) => {
        setInputState({ ...inputState, error: err });
        setIsLoading(false);
      });
  };

  return (
    <ForgotonWrapper>
      <h2>Reset your password</h2>
      <PasswordForgetForm
        inputState={inputState}
        onChange={onChange}
        isInvalid={isInvalid}
        onSubmit={sendResetEmail}
        isLoading={isLoading}
      />
    </ForgotonWrapper>
  );
};

export default PasswordForgetPage;
