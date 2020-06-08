import React from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { useAppContext } from "../../libs/contextLib";

const SignOutSpan = () => {
  const { userHasAuthenticated } = useAppContext();
  const history = useHistory();
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        alert("You have been signedOut");
        userHasAuthenticated(false);
        localStorage.setItem("isAuthenticatedLocal", false);
        localStorage.removeItem("currentUserId");
        history.push(ROUTES.HOME);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <span onClick={signOut}>Sign Out</span>
    </>
  );
};

export default SignOutSpan;
