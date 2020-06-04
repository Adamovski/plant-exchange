import React, { useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import Wrapper from "../../constants/Wrapper";
import PasswordForgetForm from "./PasswordForgetForm";
import styled from "styled-components";

const ForgotonWrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const PasswordForgetPage = () => {
  const history = useHistory();
  const initialInputState = {
    email: "",
    error: null,
  };
  const [inputState, setInputState] = useState(initialInputState);
  const { email } = inputState;
  const isInvalid = email === "";

  const onChange = (e) => {
    const { id, value } = e.target;
    setInputState({ ...inputState, [id]: value });
  };

  const sendResetEmail = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        console.log("email sent");
        setInputState({ ...initialInputState });
        history.push("/");
      })
      .catch((err) => {
        setInputState({ ...inputState, error: err });
      });
  };

  return (
    <Wrapper>
      <ForgotonWrapper>
        <h2>Reset your password</h2>
        <PasswordForgetForm
          inputState={inputState}
          onChange={onChange}
          isInvalid={isInvalid}
          onSubmit={sendResetEmail}
        />
      </ForgotonWrapper>
    </Wrapper>
  );
};

export default PasswordForgetPage;
