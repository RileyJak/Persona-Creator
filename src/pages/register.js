import React from "react";
import { Helmet } from "react-helmet";
import RegisterForm from "../components/register-form";

function Register(props) {
  const userId = props.user.uid;
  console.log(userId)
  return (
    <>
      <Helmet>
        <title>Personas&mdash;Register </title>
      </Helmet>
      <RegisterForm {...props}/>
    </>
  );
}

export default Register;
