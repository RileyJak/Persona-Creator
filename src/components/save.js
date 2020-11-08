import React, { useState } from "react";
import { personas } from "../data/firebase";
import Persona from "persona";

function Save() {
  const [isSaving, setIsSaving] = useState(false);

  const onSaveSubmit = async (address, email, genderAge, image, name, job) => {
    setIsSaving(true);

    try {
      await personas.add({
        address,
        email,
        gender,
        image,
        name,
        job,
      });
    } catch {
      console.error(error);
    }

    setIsSaving(false);
  };

  return (
    <div>
      <Persona onSubmit={onSaveSubmit} isSaving={isSaving} />
    </div>
  );
}

export default Save;
