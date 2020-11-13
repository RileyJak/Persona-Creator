import React, { useState } from "react";
import { Delete } from "@material-ui/icons";
import { personas } from "../data/firebase";
import ErrorMessage from "./error-message";
import "../css/persona-save.css";

function Person(props) {
  const { id, data } = props;
  const [isDeleting, setIsDeleting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const {
    address,
    email,
    gender,
    image,
    job,
    name,
    age,
    company,
    state,
  } = data;

  const deletePersona = async () => {
    setIsDeleting(true);
    setErrorMessage("");
    try {
      const docRef = personas.doc(id);
      await docRef.delete();
    } catch (error) {
      console.error(error);
      setErrorMessage("Something went wrong. Try again.");
      setIsDeleting(false);
    }
  };

  return (
    <div className="contents">
      <button
        className="delete__button"
        disabled={isDeleting}
        onClick={deletePersona}
      >
        <Delete />
      </button>

      <img className="save__image" src={image} />

      <h3 className="save__name">{name}</h3>
      <h3 className="save__ageGender">{`${age} | ${gender}`}</h3>
      <h3 className="save__job">{`${job} @ ${company}`}</h3>
      <h3 className="save__address">{`${address}, ${state}`}</h3>
      <h3 className="save__email">{email}</h3>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
export default Person;
