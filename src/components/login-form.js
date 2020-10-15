import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <form>
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
        <Link to="/home">Login</Link>
      </button>
    </>
  );
}

export default LoginForm;
