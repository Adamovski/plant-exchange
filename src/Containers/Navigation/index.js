import React from "react";
import { useAppContext } from "../../libs/contextLib";
import NavigationAuth from "./NavigationAuth";
import NavigationNotAuth from "./NavigationNotAuth";

const Navigation = () => {
  const { isAuthenticated, currentUserId } = useAppContext();
  //display different nav depending on authentication state
  return (
    <>
      {isAuthenticated && currentUserId ? (
        <NavigationAuth />
      ) : (
        <NavigationNotAuth />
      )}
    </>
  );
};

export default Navigation;
