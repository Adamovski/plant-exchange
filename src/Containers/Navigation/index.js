import React from "react";
import { useAppContext } from "../../libs/contextLib";
import NavigationAuth from "./NavigationAuth";
import NavigationNotAuth from "./NavigationNotAuth";

const Navigation = () => {
  const { isAuthenticated } = useAppContext();
  //display different nav depending on authentication state
  return <>{isAuthenticated ? <NavigationAuth /> : <NavigationNotAuth />}</>;
};

export default Navigation;
