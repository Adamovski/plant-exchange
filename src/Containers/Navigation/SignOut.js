import React from "react";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import * as ROUTES from "../../constants/routes";
import { useAppContext } from "../../libs/contextLib";

const SignOutButton = () => {
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
        history.push(ROUTES.HOME);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Button variant="primary" onClick={signOut}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
