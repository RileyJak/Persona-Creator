import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/login-form.css";

function LoginForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <form className="login-form">
        <div className="login-form__div">
          <label className="login-form__label">Username:</label>
          <input
            className="login-form__input"
            id="userName"
            value={userName}
            onChange={onUserNameChange}
            type="text"
          ></input>
        </div>
        <div className="login-form__div">
          <label className="login-form__label">Password:</label>
          <input
            className="login-form__input"
            id="password"
            value={password}
            onChange={onPasswordChange}
            type="password"
          ></input>
        </div>

        <div className="login-form__button-container">
          <Link to="/home">
            <button className="login-form__button">Login</button>
          </Link>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
