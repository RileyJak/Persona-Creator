import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/register-form.css";
import { users } from "../data/firebase";

function RegisterForm(props) {
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

	const save = async (event) => {
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

	return (
		<>
			<form onSubmit={save} className="register-form">
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
					<button className="register-form__button">Register</button>
					<Link to="/home">Continue</Link>
				</div>
			</form>
		</>
	);
}

export default RegisterForm;
