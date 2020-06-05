import React from "react";
import LandingPage from "./Landing";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import AuthenticatedRoute from "../components/AuthenticatedRoutes";
import UnauthenticatedRoute from "../components/UnauthenticatedRoutes";
import Home from "./Home";
import SignIn from "./SignIn/index";
import SignUp from "./SignUp/index";
import Account from "./Account/index";
import Admin from "./Admin/index";
import PasswordForgetPage from "./PasswordForget";
import ClothesDetails from "./ClothesDetails/index";
import UserProducts from "./Account/UserProducts";
import NewProduct from "./Account/AddProduct";

const Router = () => (
  <Switch>
    <Route exact path={ROUTES.LANDING}>
      <LandingPage />
    </Route>
    <Route exact path={ROUTES.HOME}>
      <Home />
    </Route>
    <UnauthenticatedRoute exact path={ROUTES.SIGN_IN}>
      <SignIn />
    </UnauthenticatedRoute>
    <UnauthenticatedRoute exact path={ROUTES.SIGN_UP}>
      <SignUp />
    </UnauthenticatedRoute>
    <UnauthenticatedRoute exact path={ROUTES.PASSWORD_FORGET}>
      <PasswordForgetPage />
    </UnauthenticatedRoute>
    <AuthenticatedRoute exact path={ROUTES.ACCOUNT}>
      <Account />
    </AuthenticatedRoute>
    <Route exact path={ROUTES.ADMIN}>
      <Admin />
    </Route>
    <Route exact path={"/my-clothes"}>
      <UserProducts />
    </Route>
    <Route exact path={"/add-item"}>
      <NewProduct />
    </Route>
    <Route exact path="/items/:id">
      <ClothesDetails />
    </Route>

    {/* <Route component={NotFound} /> */}
  </Switch>
);

export default Router;
