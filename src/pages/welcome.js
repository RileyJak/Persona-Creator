import React from "react";
import { Link } from "react-router-dom";
import { provider, auth } from "../data/firebase";
import "../css/welcome.css";

function Welcome() {
	const signIn = async () => {
		try {
			const result = await auth.signInWithPopup(provider);
			console.log(result.user);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<>
			<h1 className="welcome__title">Personas</h1>

			<div className="welcome__button-container">
				<Link to="/register">
					<button className="welcome__button" onClick={signIn}>
						Register
					</button>
				</Link>
				<Link to="/home">
					<button onClick={signIn} className="welcome__button">
						Login
					</button>
				</Link>
			</div>
		</>
	);
}

export default Welcome;
