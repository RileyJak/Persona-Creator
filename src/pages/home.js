import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Persona from "../components/persona";
import PersonaForm from "../components/persona-form";
import "../css/home-page.css";

function Home(props) {
	return (
		<>
			<Helmet>
				<title>Personas&mdash;Home </title>
			</Helmet>
			<Header></Header>
			<div className="home">
				<div className="home__form">
					<PersonaForm />
				</div>

				<div className="home__display">
					<Persona {...props} />
				</div>
			</div>
		</>
	);
}

export default Home;
