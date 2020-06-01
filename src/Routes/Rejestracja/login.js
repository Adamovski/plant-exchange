import React from "react";
import PropTypes from "prop-types";

const Login = (props) => (
  <div className="login">
    <p>Zaloguj się za pomocą Facebook</p>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Log In With Facebook
    </button>
  </div>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
