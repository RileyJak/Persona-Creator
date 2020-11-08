import React from "react";
import "../css/persona.css";
import SaveButton from "./save-button";

function Persona(props) {
  const { isSaving, OnSubmit } = props;
  const onSaveSubmit = async (event) => {
    event.preventDefault();
    OnSubmit(address, email, gender, image, name);
  };
  var faker = require("faker");

  var name = faker.name.findName();
  var gender = faker.name.gender();
  var age = faker.random.number();
  var image = faker.image.people();
  var job = faker.name.jobType();
  var company = faker.company.companyName();
  var email = faker.internet.email();
  var address = faker.address.streetAddress();
  var state = faker.address.stateAbbr();

  return (
    <>
      <form className="persona" onSubmit={onSaveSubmit}>
        <input className="SaveButton" type="submit" value={SaveButton} />
        <img value={image} className="persona__image" src={image} />
        <div className="persona__content">
          <h1 value={name} className="persona__name">
            {name}
          </h1>
          <h3
            value={gender}
            className="persona__age-gender"
          >{`${age} | ${gender}`}</h3>
          <h3
            value={job}
            className="persona__personality"
          >{`${job} @ ${company}`}</h3>

          <h3
            value={address}
            className="persona__address"
          >{`${address}, ${state}`}</h3>
          <h3 value={email} className="persona__email-address">
            {email}
          </h3>
        </div>
      </form>
    </>
  );
}

export default Persona;
