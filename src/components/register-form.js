import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const onUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <form>
        <div>
          <label>Email:</label>
          <input
            id="email"
            value={email}
            onChange={onEmailChange}
            type="text"
          ></input>
        </div>
        <div>
          <label>Name:</label>
          <input
            id="name"
            value={name}
            onChange={onNameChange}
            type="text"
          ></input>
        </div>
        <div>
          <label>Username:</label>
          <input
            id="userName"
            value={userName}
            onChange={onUserNameChange}
            type="text"
          ></input>
        </div>
        <div>
          <label>Password:</label>
          <input
            id="password"
            value={password}
            onChange={onPasswordChange}
            type="password"
          ></input>
        </div>
      </form>

      <button>
        <Link to="/home">Register</Link>
      </button>
    </>
  );
}

export default RegisterForm;
