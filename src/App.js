import React, { useState, useEffect } from "react";
import Navigation from "./containers/Navigation/index";
import Router from "./routes";
import { AppContext } from "./libs/contextLib";
import { Wrapper, Background } from "./constants/stylingElements";
import Footer from "./components/Footer";

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
