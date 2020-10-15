import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";

function Saved() {
  return (
    <>
      <Helmet>
        <title>Personas 🤹‍♂️ &mdash; Saved </title>
      </Helmet>
      <Header />
      This is where you can view personas that you have saved
    </>
  );
}

export default Saved;
