import React from "react";
import { Helmet } from "react-helmet";
import RegisterForm from "../components/register-form";

function Register() {
  return (
    <>
      <Helmet>
        <title>Personas&mdash;Register </title>
      </Helmet>
      <RegisterForm />
    </>
  );
}

export default Register;
