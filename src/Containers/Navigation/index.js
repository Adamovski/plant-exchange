import React from "react";
import { useAppContext } from "../../Libs/contextLib";
import NavigationAuth from "./NavigationAuth";
import NavigationNotAuth from "./NavigationNotAuth";

const Navigation = () => {
  const { isAuthenticated } = useAppContext();
  return <>{isAuthenticated ? <NavigationAuth /> : <NavigationNotAuth />}</>;
};

export default Navigation;
