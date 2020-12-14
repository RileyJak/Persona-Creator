import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import SavedGrid from "../components/saved-grid";

function Saved(props) {
	return (
		<>
			<Helmet>
				<title>Personas&mdash;Saved </title>
			</Helmet>
			<Header />
			<SavedGrid {...props} />
		</>
	);
}

export default Saved;
