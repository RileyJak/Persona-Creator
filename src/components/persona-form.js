import React, { useState } from "react";

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
      <form>
        <div>
          <label>Gender:</label>
          <select id="gender" value={gender} onChange={onGenderChange}>
            <option value="1">Female</option>
            <option value="2">Male</option>
            <option value="3">Non-Binary</option>
            <option value="4">N/A</option>
          </select>
        </div>
        <div>
          <label>Age Range:</label>
          <select id="age" value={age} onChange={onAgeChange}>
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
        <div>
          <button>Create</button>
        </div>
      </form>
    </>
  );
}

export default PersonaForm;
