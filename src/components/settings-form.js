import React, { useState } from "react";
import "../css/settings-form.css";
import { provider, auth } from "../data/firebase";

function SettingsForm() {
	const [userName, setUserName] = useState("stored username");
	const [password, setPassword] = useState("store password");
	const [email, setEmail] = useState("stored email");

	const onUserNameChange = (event) => {
		setUserName(event.target.value);
	};

	const onPasswordChange = (event) => {
		setPassword(event.target.value);
	};
	const onEmailChange = (event) => {
		setEmail(event.target.value);
	};

	return (
		<>
			<form className="settings-form">
				<div className="settings-form__div">
					<label className="settings-form__label">Username:</label>
					<input
						className="settings-form__input"
						id="userName"
						value={userName}
						onChange={onUserNameChange}
						type="text"
					></input>
				</div>
				<div className="settings-form__div">
					<label className="settings-form__label">Email:</label>
					<input
						className="settings-form__input"
						id="email"
						value={email}
						onChange={onEmailChange}
						type="text"
					></input>
				</div>
				<div className="settings-form__div">
					<label className="settings-form__label">Password:</label>
					<input
						className="settings-form__input"
						id="password"
						value={password}
						onChange={onPasswordChange}
						type="password"
					></input>
				</div>
				<div className="settings-form__button_container">
					<button className="settings-form__button">Edit</button>
				</div>
				{/* Need to learn how to make it from edit to save when implamenting user accounts */}
				<div className="settings-form__button-container">
					<button className="settings-form__button">Save</button>
				</div>
			</form>
		</>
	);
}

export default SettingsForm;
