import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <Helmet>
        <title>Personas 🤹‍♂️ &mdash; Register </title>
      </Helmet>
      This is where you will register for a user account
      <button>
        <Link to="/home">Register</Link>
      </button>
    </>
  );
}

export default Register;
