import React from "react";
import { Link } from "react-router-dom";
import "../css/register-form.css";

function RegisterForm(props) {
	const {
		name,
		company,
		role,
		onNameChange,
		onRoleChange,
		onCompanyChange,
	} = props;
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
						<button className="register-form__button">Register</button>
					</Link>
				</div>
			</form>
		</>
	);
}

export default RegisterForm;
