import React, { useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import { writeUserData } from "../../helpers/firebaseHelpers";
import SignUpForm from "./SignUpForm";
import * as ROUTES from "../../constants/routes";
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
  const { userHasAuthenticated, setCurrentUserId } = useAppContext();
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
        //set current uid
        setCurrentUserId(authUser.user.uid);
        localStorage.setItem("currentUserId", authUser.user.uid);
        setInputState({ ...initialInputState });
        history.push(ROUTES.HOME);
        userHasAuthenticated(true);
      })
      .catch((err) => {
        setInputState({ ...inputState, error: err });
      });
  };

  return (
    <SignUpWrapper>
      <h2>Sign Up</h2>
      <SignUpForm
        inputState={inputState}
        onChange={onChange}
        onSubmit={signUp}
        isInvaild={isInvalid}
      />
    </SignUpWrapper>
  );
};

export default SignUpPage;
