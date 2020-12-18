import React, { useState, useEffect } from "react";
import "../css/settings-form.css";
import { provider, auth, users } from "../data/firebase";

function SettingsForm(props) {
	const { user } = props;

	const [isSaving, setIsSaving] = useState(false);

	const [name, setName] = useState();
	const [role, setRole] = useState();
	const [company, setCompany] = useState();

	const onNameChange = (event) => {
		setName(event.target.value);
	};

	const onRoleChange = (event) => {
		setRole(event.target.value);
	};
	const onCompanyChange = (event) => {
		setCompany(event.target.value);
	};

	const update = async (event) => {
		event.preventDefault();
		setIsSaving(true);
		try {
			await users.doc(user.uid).set({
				name,
				role,
				company,
			});
		} catch (error) {
			console.error(error);
		}
		setIsSaving(false);
	};

	useEffect(() => {
		async function read() {
			try {
				const snapshot = await users.doc(user.uid).get();

				const data = snapshot.data();
				setRole(data.role);
				setName(data.name);
				setCompany(data.company);
			} catch (error) {
				console.error(error);
			}
		}
		read();
	}, [user]);

	const read = async () => {
		try {
			await users.doc(user).get({
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
			<form onSubmit={update} className="settings-form">
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
					<button className="settings-form__button">Save</button>
				</div>
			</form>
		</>
	);
}

export default SettingsForm;
