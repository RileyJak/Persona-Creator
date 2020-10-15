import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";

function Home() {
  return (
    <>
      <Helmet>
        <title>Personas 🤹‍♂️ &mdash; Home </title>
      </Helmet>
      <Header></Header>
      This is where you can generate the persona
    </>
  );
}

export default Home;
