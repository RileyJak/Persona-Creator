import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/header";
import SettingsForm from "../components/settings-form";

function UserSettings(props) {
	return (
		<>
			<Helmet>
				<title>Personas&mdash;Settings </title>
			</Helmet>
			<Header />
			<SettingsForm {...props} />
		</>
	);
}

export default UserSettings;
