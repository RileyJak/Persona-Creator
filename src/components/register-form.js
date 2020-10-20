import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/register-form.css";

function RegisterForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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
      <form className="register-form">
        <div className="register-form__div">
          <label className="register-form__label">Email:</label>
          <input
            className="register-form__input"
            id="email"
            value={email}
            onChange={onEmailChange}
            type="text"
          ></input>
        </div>

        <div className="register-form__div">
          <label className="register-form__label">Username:</label>
          <input
            className="register-form__input"
            id="userName"
            value={userName}
            onChange={onUserNameChange}
            type="text"
          ></input>
        </div>
        <div className="register-form__div">
          <label className="register-form__label">Password:</label>
          <input
            className="register-form__input"
            id="password"
            value={password}
            onChange={onPasswordChange}
            type="password"
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
