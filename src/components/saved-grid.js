import React, { useEffect, useState } from "react";
import "../css/saved-grid.css";
import { personas } from "../data/firebase";
import Person from "./persona-save";
import Loading from "./loading-spinner";

function SavedGrid() {
  const [persona, setPersona] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const onNext = (snapshot) => {
      setIsLoading(false);
      const docs = snapshot.docs;
      setPersona(docs);
    };
    const onError = (error) => {
      setErrorMessage(
        "There was a problem loading your movie ratings. Please try again."
      );
      console.error(error);
    };
    const unsubscribe = personas
      .orderBy("time", "desc")
      .onSnapshot(onNext, onError);
    return unsubscribe;
  }, []);

  return (
    <>
      <div className="persona-container">
        {isLoading && <Loading />}

        {errorMessage && "this is error"}
        <ul className="persona-list">
          {persona.map((personaDoc) => {
            const id = personaDoc.id;
            const data = personaDoc.data();

            return (
              <li key={id}>
                <Person id={id} data={data} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SavedGrid;
