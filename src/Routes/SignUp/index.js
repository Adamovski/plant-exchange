import React, { useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../libs/contextLib";
import { writeUserData } from "../../helpers/firebaseHelpers";
import SignUpForm from "./SignUpForm";
import * as ROUTES from "../../constants/routes";
import styled from "styled-components";

const SignUpWrapper = styled.div`
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
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
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
        isLoading={isLoading}
      />
    </SignUpWrapper>
  );
};

export default SignUpPage;
