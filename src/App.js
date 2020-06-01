import React from "react";
import "./App.css";
import HomePage from "./Routes/HomePage/index";
import Navigation from "./Components/Navigation";
import Router from "./Routes";

function App() {
  return (
    <>
      <Navigation />
      <Router />
    </>
  );
}

export default App;
