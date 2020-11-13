import React, { useState } from "react";
import "../css/persona.css";
import SaveButton from "./save-button";
import { personas } from "../data/firebase";
import Loading from "./loading-spinner";
import faker from "faker";
import firebase from "firebase/app";

function Persona() {
  function getAge(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const [isSaving, setIsSaving] = useState(false);
  const [hasSaved, setHasSaved] = useState(false);
  const [personaData, setPersonaData] = useState(() => {
    return {
      name: faker.name.findName(),
      gender: faker.name.gender(),
      age: getAge(1, 100),
      image: faker.image.people(),
      job: faker.name.jobType(),
      company: faker.company.companyName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      state: faker.address.stateAbbr(),
    };
  });

  const {
    address,
    email,
    gender,
    image,
    name,
    job,
    age,
    company,
    state,
  } = personaData;

  const onSaveSubmit = async (event) => {
    setIsSaving(true);
    setHasSaved(false);
    event.preventDefault();
    try {
      await personas.add({
        address,
        email,
        gender,
        image,
        name,
        job,
        age,
        company,
        state,
        time: firebase.firestore.Timestamp.now(),
      });
      setHasSaved(true);
    } catch {
      console.log("error");
    }

    setIsSaving(false);
  };

  let classes = "SaveButton";
  if (hasSaved === true) classes += "-saved";

  return (
    <>
      <form className="persona" onSubmit={onSaveSubmit}>
        {isSaving ? (
          <Loading />
        ) : (
          <button className={classes} disabled={hasSaved} />
        )}
        <img className="persona__image" src={image} />
        <div className="persona__content">
          <h1 className="persona__name">{name}</h1>
          <h3 className="persona__age-gender">{`${age} | ${gender}`}</h3>
          <h3 className="persona__personality">{`${job} @ ${company}`}</h3>

          <h3 className="persona__address">{`${address}, ${state}`}</h3>
          <h3 value={email} className="persona__email-address">
            {email}
          </h3>
        </div>
      </form>
    </>
  );
}

export default Persona;
