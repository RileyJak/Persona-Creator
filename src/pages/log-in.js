import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Helmet>
        <title>Personas 🤹‍♂️ &mdash; Login </title>
      </Helmet>
      Here you will enter your log in information
      <button>
        <Link to="/home">Login</Link>
      </button>
    </>
  );
}

export default Login;
