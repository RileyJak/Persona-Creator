import React, { useState } from "react";
import "../css/persona-form.css";
function PersonaForm() {
  const [age, setAge] = useState(4);
  const [gender, setGender] = useState(12);

  const onAgeChange = (event) => {
    setAge(event.target.value);
  };
  const onGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <>
      <form className="persona-form">
        <h2 className="persona-form__title">Create</h2>
        <div className="persona-form__div">
          <label className="persona-form__label">Gender:</label>
          <select
            className="persona-form__input"
            id="gender"
            value={gender}
            onChange={onGenderChange}
          >
            <option value="1">Female</option>
            <option value="2">Male</option>
            <option value="3">Non-Binary</option>
            <option value="4">N/A</option>
          </select>
        </div>
        <div className="persona-form__div">
          <label className="persona-form__label">Age Range:</label>
          <select
            className="persona-form__input"
            id="age"
            value={age}
            onChange={onAgeChange}
          >
            <option value="1">0-4 years old</option>
            <option value="2">5-10 years old</option>
            <option value="3">11-15 years old</option>
            <option value="4">16-20 years old</option>
            <option value="5">21-25 years old</option>
            <option value="6">26-30 years old</option>
            <option value="7">31-40 years old</option>
            <option value="8">41-55 years old</option>
            <option value="9">56-65 years old</option>
            <option value="10">66-75 years old</option>
            <option value="11">75+ years old</option>
            <option value="12">N/A</option>
          </select>
        </div>
        <div className="persona-form__button-container">
          <button className="persona-form__button">Create</button>
        </div>
      </form>
    </>
  );
}

export default PersonaForm;