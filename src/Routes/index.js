import React from "react";
import HomePage from "./HomePage";
import Rejestracja from "./Rejestracja/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Market from "./Market";

const Router = () => (
  <Switch>
    <Route exact path="/">
      <HomePage />
    </Route>
    <Route path="/rejestracja">
      <Rejestracja />
    </Route>
    <Route path="/market">
      <Market />
    </Route>
    {/* <Route component={NotFound} /> */}
  </Switch>
);

export default Router;
