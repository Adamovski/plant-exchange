import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./containers/Navigation/index";
import Router from "./routes";
import { AppContext } from "./libs/contextLib";

function App() {
  //declare authentication state
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [itemId, setItemId] = useState("");

  useEffect(() => {
    let currentAuth = localStorage.getItem("isAuthenticatedLocal");
    userHasAuthenticated(currentAuth);
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{ isAuthenticated, userHasAuthenticated, itemId, setItemId }}
      >
        <Navigation />
        <Router />
      </AppContext.Provider>
    </>
  );
}

export default App;
