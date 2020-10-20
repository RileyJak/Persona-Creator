import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import SavedGrid from "../components/saved-grid";

function Saved() {
  return (
    <>
      <Helmet>
        <title>Personas&mdash;Saved </title>
      </Helmet>
      <Header />
      <SavedGrid />
    </>
  );
}

export default Saved;
