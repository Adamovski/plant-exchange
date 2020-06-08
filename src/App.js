import React, { useState } from "react";
import Navigation from "./containers/Navigation/index";
import Router from "./routes";
import { AppContext } from "./libs/contextLib";
import { Wrapper, Background } from "./constants/stylingElements";
import Footer from "./components/Footer";

function App() {
  //get details from local storage
  let currentAuth = JSON.parse(localStorage.getItem("isAuthenticatedLocal"));
  let localeStoragetUserId = localStorage.getItem("currentUserId")
    ? localStorage.getItem("currentUserId")
    : "";
  //declare authentication state
  const [isAuthenticated, userHasAuthenticated] = useState(currentAuth);
  //current userId
  const [currentUserId, setCurrentUserId] = useState(localeStoragetUserId);

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
          <Background>
            <Router />
          </Background>
        </Wrapper>
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;
