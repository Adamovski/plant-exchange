import React, { useState } from "react";
import firebase from "firebase";
import SignUpForm from "./SignUpForm";
import { useAppContext } from "../../Libs/contextLib";
import * as ROUTES from "../../constants/routes";
import { useHistory } from "react-router-dom";
import Wrapper from "../../constants/Wrapper";
import styled from "styled-components";

const SignUpWrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const SignUpPage = () => {
  const history = useHistory();
  // declare new user details state
  const initialInputState = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: "",
    error: null,
  };
  //auth control from context
  const { userHasAuthenticated } = useAppContext();
  const [inputState, setInputState] = useState(initialInputState);
  // destructure for easy access
  const { passwordOne, passwordTwo, email, username } = inputState;

  //declare form validaiton
  const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === "" ||
    email === "" ||
    username === "";

  //form input handler
  const onChange = (e) => {
    const { id, value } = e.target;
    setInputState({ ...inputState, [id]: value });
  };

  //create new user function
  const signUp = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, passwordOne)
      .then(() => {
        console.log("success");
        userHasAuthenticated(true);
        setInputState({ ...initialInputState });
        history.push(ROUTES.HOME);
      })
      .catch((err) => {
        setInputState({ ...inputState, error: err });
      });
  };

  return (
    <Wrapper>
      <SignUpWrapper>
        <h1>SignUp</h1>
        <SignUpForm
          inputState={inputState}
          onChange={onChange}
          onSubmit={signUp}
          isInvaild={isInvalid}
        />
      </SignUpWrapper>
    </Wrapper>
  );
};

export default SignUpPage;
