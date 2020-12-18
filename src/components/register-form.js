import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/register-form.css";
import { users } from "../data/firebase";

function RegisterForm(props) {
	const {
		name,
		company,
		role,
		onNameChange,
		onRoleChange,
		onCompanyChange,
	} = props;


	const userId = props.user.uid;



	const [isSaving, setIsSaving] = useState(false);
	const [hasSaved, setHasSaved] = useState(false);

	const save = async (userId, event) => {
		setIsSaving(true);
		setHasSaved(false);
		console.log(userId);
		try {
			await users.doc(userId).add({
				name: {name},
				role: {role},
				company: {company},
				
			});
			setHasSaved(true);
		} catch (error) {
			console.error(error);
		}

		setIsSaving(false);
	};
	return (
		<>
			<form className="register-form">
				<div className="register-form__div">
					<label className="register-form__label">Name:</label>
					<input
						className="register-form__input"
						id="name"
						value={name}
						onChange={onNameChange}
						type="text"
					></input>
				</div>
				<div className="register-form__div">
					<label className="register-form__label">Company:</label>
					<input
						className="register-form__input"
						id="company"
						value={company}
						onChange={onCompanyChange}
						type="text"
					></input>
				</div>

				<div className="register-form__div">
					<label className="register-form__label">Role:</label>
					<input
						className="register-form__input"
						id="role"
						value={role}
						onChange={onRoleChange}
						type="text"
					></input>
				</div>
				<div className="register-form__button-container">
					<Link to="/home">
						<button onClick={save(userId)} className="register-form__button">Register</button>
					</Link>
				</div>
			</form>
		</>
	);
}

export default RegisterForm;
