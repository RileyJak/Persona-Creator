import React from "react";
import { Link } from "react-router-dom";
import "../css/welcome.css";

function Welcome() {
  return (
    <>
      <h1 className="welcome__title">Personas</h1>

      <div className="welcome__button-container">
        <Link to="/register">
          <button className="welcome__button">Register</button>
        </Link>
        <Link to="/login">
          <button className="welcome__button">Login</button>
        </Link>
      </div>
    </>
  );
}

export default Welcome;
