import React from "react";
import "../css/settings-form.css";
import { provider, auth, users } from "../data/firebase";

function SettingsForm(props) {
	const {
		name,
		company,
		role,
		onNameChange,
		onRoleChange,
		onCompanyChange,
		userId,
	} = props;


	const read = async (name, role, company) => {
		
		try {
		  await users.doc(userId).get({
			name,
			role,
			company,
		  });
		  
		} catch (error) {
		  console.error(error);
		}
	  };


	  const update = async (name, role, company) => {
		
		try {
		  await users.doc(userId).update({
			name,
			role,
			company,
		  });
		  
		} catch (error) {
		  console.error(error);
		}
	  };


	return (
		<>
			<form className="settings-form">
				<div className="settings-form__div">
					<label className="settings-form__label">Name:</label>
					<input
						className="settings-form__input"
						id="userName"
						value={name}
						onChange={onNameChange}
						type="text"
					></input>
				</div>
				<div className="settings-form__div">
					<label className="settings-form__label">Company:</label>
					<input
						className="settings-form__input"
						id="company"
						value={company}
						onChange={onCompanyChange}
						type="text"
					></input>
				</div>
				<div className="settings-form__div">
					<label className="settings-form__label">Role:</label>
					<input
						className="settings-form__input"
						id="role"
						value={role}
						onChange={onRoleChange}
						type="text"
					></input>
				</div>
				<div className="settings-form__button_container">
					<button onclick={update(name, role, company)} className="settings-form__button">Edit</button>
				</div>
			</form>
		</>
	);
}

export default SettingsForm;
