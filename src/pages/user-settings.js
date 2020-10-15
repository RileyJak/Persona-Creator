import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/header";

function UserSettings() {
  return (
    <>
      <Helmet>
        <title>Personas 🤹‍♂️ &mdash; Settings </title>
      </Helmet>
      <Header />
      This is where user settings will be
      <button>
        <Link to="/">Log Out</Link>
      </button>
    </>
  );
}

export default UserSettings;
