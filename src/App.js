import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./containers/Navigation/index";
import Router from "./routes";
import firebase from "firebase";
import { AppContext } from "./libs/contextLib";
import Wrapper from "./constants/Wrapper";

function App() {
  //declare authentication state
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  //current userId
  const [currentUserId, setCurrentUserId] = useState("");

  useEffect(() => {
    let currentAuth = localStorage.getItem("isAuthenticatedLocal");
    let currentUserId = localStorage.getItem("currentUserId");
    userHasAuthenticated(currentAuth);
    setCurrentUserId(currentUserId);
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{
          isAuthenticated,
          userHasAuthenticated,
          currentUserId,
          setCurrentUserId,
        }}
      >
        <Navigation />
        <Wrapper>
          <Router />
        </Wrapper>
      </AppContext.Provider>
    </>
  );
}

export default App;
