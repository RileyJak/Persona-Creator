import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Persona from "../components/persona";
import PersonaForm from "../components/persona-form";
import "../css/home-page.css";
import useSavePersona from "../hooks/use-save-persona";

function Home(props) {

	const userId = props.user.uid;
	const personData = useSavePersona(userId);


	return (
		<>
			<Helmet>
				<title>Personas&mdash;Home </title>
			</Helmet>
 <Header></Header>  
			<div className="home">
				<div className="home__form">
					<PersonaForm {...props} data={personData} />
				</div>

				<div className="home__display">
					<Persona {...props} data={personData}/>
				</div>
			</div>
		</>
	);
}

export default Home;
