import React, { useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import { writeUserData } from "../../helpers/firebaseHelpers";
import SignUpForm from "./SignUpForm";
import * as ROUTES from "../../constants/routes";
import styled from "styled-components";
import Wrapper from "../../constants/Wrapper";

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
      .then((authUser) => {
        console.log("success");
        writeUserData(username, email, authUser.user.uid, firebase);
        console.log(writeUserData);
        //set local storage
        localStorage.setItem("isAuthenticatedLocal", true);
        setInputState({ ...initialInputState });
        history.push(ROUTES.HOME);
        userHasAuthenticated(true);
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
