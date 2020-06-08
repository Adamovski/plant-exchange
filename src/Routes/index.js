import React from "react";
import LandingPage from "./Landing";
import { Switch, Route } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import AuthenticatedRoute from "../components/AuthenticatedRoutes";
import UnauthenticatedRoute from "../components/UnauthenticatedRoutes";
import Home from "./Home";
import SignIn from "./SignIn/index";
import SignUp from "./SignUp/index";
import PasswordForgetPage from "./PasswordForget";
import ClothesDetails from "./ClothesDetails/index";
import UserProducts from "./Account/UserProducts";
import NewProduct from "./Account/AddProduct";
import AboutUs from "./AboutUs/index";

const Router = () => (
  <Switch>
    <Route exact path={ROUTES.LANDING}>
      <LandingPage />
    </Route>
    <Route exact path={ROUTES.HOME}>
      <Home />
    </Route>
    <Route exact path={ROUTES.ABOUT_US}>
      <AboutUs />
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
    <AuthenticatedRoute exact path={ROUTES.MY_CLOTHES}>
      <UserProducts />
    </AuthenticatedRoute>
    <AuthenticatedRoute exact path={ROUTES.ADD_ITEM}>
      <NewProduct />
    </AuthenticatedRoute>
    <Route exact path={ROUTES.CLOTHES_DETAILS}>
      <ClothesDetails />
    </Route>

    {/* <Route component={NotFound} /> */}
  </Switch>
);

export default Router;
