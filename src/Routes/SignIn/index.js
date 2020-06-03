import React, { useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { useAppContext } from "../../Libs/contextLib";
import Wrapper from "../../constants/Wrapper";
import styled from "styled-components";
import SignInForm from "./SignInForm";
import SignUpLink from "./SignUpLink";

const SignInWrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SignInPage = () => {
  const history = useHistory();
  const initialInputState = {
    username: "",
    email: "",
    password: "",
    error: null,
  };
  const [inputState, setInputState] = useState(initialInputState);
  //auth control from context
  const { userHasAuthenticated } = useAppContext();
  //destructure input state
  const { password, email } = inputState;
  const isInvalid = password === "" || email === "";

  const logIn = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("signed in");
        userHasAuthenticated(true);
        setInputState({ ...initialInputState });
        history.push(ROUTES.HOME);
      })
      .catch((err) => {
        setInputState({ ...inputState, error: err });
      });
  };

  const onChange = (e) => {
    const { id, value } = e.target;
    setInputState({ ...inputState, [id]: value });
  };

  return (
    <Wrapper>
      <SignInWrapper>
        <h1>SignUp</h1>
        <SignInForm
          inputState={inputState}
          onChange={onChange}
          onSubmit={logIn}
          isInvalid={isInvalid}
        />
        <SignUpLink />
      </SignInWrapper>
    </Wrapper>
  );
};

export default SignInPage;
