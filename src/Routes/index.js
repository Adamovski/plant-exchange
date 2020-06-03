import React from "react";
import LandingPage from "./HomePage";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import Home from "./Home";
import SignIn from "./SignIn/index";
import SignUp from "./SignUp/index";
import Account from "./Account/index";
import Admin from "./Admin/index";

const Router = () => (
  <Switch>
    <Route exact path={ROUTES.LANDING}>
      <LandingPage />
    </Route>
    <Route path={ROUTES.HOME}>
      <Home />
    </Route>
    <Route path={ROUTES.SIGN_IN}>
      <SignIn />
    </Route>
    <Route path={ROUTES.SIGN_UP}>
      <SignUp />
    </Route>
    <Route path={ROUTES.ACCOUNT}>
      <Account />
    </Route>
    <Route path={ROUTES.ADMIN}>
      <Admin />
    </Route>

    {/* <Route component={NotFound} /> */}
  </Switch>
);

export default Router;
