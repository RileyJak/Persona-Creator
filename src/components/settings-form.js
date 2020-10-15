import React, { useState } from "react";

function SettingsForm() {
  const [userName, setUserName] = useState("stored username");
  const [password, setPassword] = useState("store password");
  const [email, setEmail] = useState("stored email");
  const [name, setName] = useState("stored name");

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
          <label>Email:</label>
          <input
            id="email"
            value={email}
            onChange={onEmailChange}
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
        <button>Edit</button>{" "}
        {/* Need to learn how to make it from edit to save when implamenting user accounts */}
        <button>Save</button>
      </form>
    </>
  );
}

export default SettingsForm;
