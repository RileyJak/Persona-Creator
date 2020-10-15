import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../components/header";
import SettingsForm from "../components/settings-form";

function UserSettings() {
  return (
    <>
      <Helmet>
        <title>Personas 🤹‍♂️ &mdash; Settings </title>
      </Helmet>
      <Header />
      <SettingsForm />
      <button>
        <Link to="/">Log Out</Link>
      </button>
    </>
  );
}

export default UserSettings;
