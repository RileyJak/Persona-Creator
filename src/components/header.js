import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <nav>
            <Link to="/home">Home</Link> | <Link to="/saved">Saved</Link> |{" "}
            <Link to="/settings">Settings</Link> | <Link to="/">Logout</Link>
          </nav>
        </nav>
      </header>
    </>
  );
}

export default Header;
