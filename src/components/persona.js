import React from "react";
import "../css/persona.css";
import SaveButton from "./save-button";
import Loading from "./loading-spinner";
import useSavePersona from "../hooks/use-save-persona";

function Persona(props) {
	const userId = props.user.uid;
	const [
		save,
		isSaving,
		hasSaved,
		address,
		email,
		gender,
		image,
		name,
		job,
		age,
		company,
		state,
		classes,
	] = useSavePersona(userId);

	return (
		<>
			<form className="persona" onSubmit={save}>
				{isSaving ? (
					<Loading />
				) : (
					<button className={classes} disabled={hasSaved} />
				)}
				<img className="persona__image" src={image} />
				<div className="persona__content">
					<h1 className="persona__name">{name}</h1>
					<h3 className="persona__age-gender">{`${age} | ${gender}`}</h3>
					<h3 className="persona__personality">{`${job} @ ${company}`}</h3>

					<h3 className="persona__address">{`${address}, ${state}`}</h3>
					<h3 value={email} className="persona__email-address">
						{email}
					</h3>
				</div>
			</form>
		</>
	);
}

export default Persona;
