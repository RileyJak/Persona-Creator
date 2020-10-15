import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import PersonaForm from "../components/persona-form";

function Home() {
  return (
    <>
      <Helmet>
        <title>Personas 🤹‍♂️ &mdash; Home </title>
      </Helmet>
      <Header></Header>
      Enter the gender and age range you need or hit randomize for a totlly
      random persona
      <PersonaForm />
      After you hit randomize or create the persona will appear below
      <div>
        <h5>To-Do</h5>
        <ul>
          <li>
            Make it so template loads with generated info as well as sections
            for the user to fill out
          </li>
          <li>Download filled out template as a PDF</li>
          <li>favorite personas and save them in user accounts</li>
        </ul>
      </div>
    </>
  );
}

export default Home;
