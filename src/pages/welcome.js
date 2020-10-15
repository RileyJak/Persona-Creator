import React from "react";
import { Helmet } from "helmet";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      Here is my welcome page
      <button>
        <Link to="/register">Register</Link>
      </button>
      <button>
        <Link to="/login">Login</Link>
      </button>
    </>
  );
}

export default Welcome;
