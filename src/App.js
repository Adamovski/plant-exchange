import React, { useState } from "react";
import "./App.css";
import Navigation from "./Containers/Navigation/index";
import Router from "./Routes";
import { AppContext } from "./Libs/contextLib";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  return (
    <>
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Navigation />
        <Router />
      </AppContext.Provider>
    </>
  );
}

export default App;
