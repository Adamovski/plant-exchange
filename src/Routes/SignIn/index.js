import React, { useState } from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { useAppContext } from "../../libs/contextLib";
import styled from "styled-components";
import SignInForm from "./SignInForm";
import SignUpLink from "./SignUpLink";
import ForgotPasswordLink from "./ForgotPasswordLink";

const SignInWrapper = styled.div`
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
    margin-bottom: 2rem;
  }
  .links {
    margin-top: 2rem;
  }
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
  const { userHasAuthenticated, setCurrentUserId } = useAppContext();
  //destructure input state
  const { password, email } = inputState;
  const [isLoading, setIsLoading] = useState(false);
  const isInvalid = password === "" || email === "";

  const logIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("signed in");
        //set local storage
        const user = firebase.auth().currentUser;
        localStorage.setItem("isAuthenticatedLocal", true);
        setInputState({ ...initialInputState });
        localStorage.setItem("currentUserId", user.uid);
        setCurrentUserId(user.uid);
        history.push(ROUTES.HOME);
        userHasAuthenticated(true);
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
    <SignInWrapper>
      <h2>Sign In</h2>
      <SignInForm
        isLoading={isLoading}
        inputState={inputState}
        onChange={onChange}
        onSubmit={logIn}
        isInvalid={isInvalid}
      />
      <div className="links">
        <SignUpLink />
        <ForgotPasswordLink />
      </div>
    </SignInWrapper>
  );
};

export default SignInPage;
