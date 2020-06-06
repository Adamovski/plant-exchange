import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAppContext } from "../libs/contextLib";
import * as ROUTES from "../constants/routes";

export default function AuthenticatedRoute({ children, ...rest }) {
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
