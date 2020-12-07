import React from "react";
import "../css/saved-grid.css";
import useAllPersonas from "../hooks/use-all-personas";
import Person from "./persona-save";
import Loading from "./loading-spinner";

function SavedGrid() {
	const [persona, isLoading, errorMessage] = useAllPersonas();
	return (
		<div className="persona-container">
			{isLoading && <Loading />}

			{errorMessage && "this is error"}
			<ul className="persona-list">
				{persona.map((personaDoc) => {
					const id = personaDoc.id;
					const data = personaDoc.data();

					return (
						<li key={id}>
							<Person id={id} data={data} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default SavedGrid;
