import React from "react";
import holder from "../images/icons8-person-64.png";
import "../css/persona.css";
import SaveButton from "./save-button";

function Persona() {
  return (
    <>
      <div className="persona">
        <SaveButton />
        <img className="persona__image" src={holder} />
        <div className="persona__content">
          <h1 className="persona__name">Name</h1>
          <h3 className="persona__age-gender"> Age | Gender</h3>

          <h3 className="persona__personality">Personality type</h3>
          <h3 className="persona__disney">Fave disney character</h3>
          <h3 className="persona__email-adress">Email | Address</h3>
        </div>
      </div>
    </>
  );
}

export default Persona;
