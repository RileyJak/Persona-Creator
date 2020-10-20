import React from "react";
import { Helmet } from "react-helmet";

import LoginForm from "../components/login-form";

function Login() {
  return (
    <>
      <Helmet>
        <title>Personas&mdash;Login </title>
      </Helmet>
      <LoginForm />
    </>
  );
}

export default Login;
