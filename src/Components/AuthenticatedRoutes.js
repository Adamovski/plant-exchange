import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import * as ROUTES from "../constants/routes";

export default function AuthenticatedRoute({ children, ...rest }) {
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useAppContext();
  return (
    <Route {...rest}>
      {isAuthenticated
        ? children
        : () => {
            return <Redirect to={ROUTES.SIGN_IN} />;
          }}
    </Route>
  );
}
