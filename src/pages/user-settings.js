import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/header";
import SettingsForm from "../components/settings-form";

function UserSettings() {
  return (
    <>
      <Helmet>
        <title>Personas&mdash;Settings </title>
      </Helmet>
      <Header />
      <SettingsForm />
    </>
  );
}

export default UserSettings;
