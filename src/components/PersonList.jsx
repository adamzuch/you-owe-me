import React, { useContext } from "react";
import { Context } from "../context/State";
import Person from "./Person";

function PersonList() {
  const { persons, addPerson } = useContext(Context);

  return (
    <div className="PersonList">
      { persons.map(person => <Person key={person.id} person={person}/>) }
      <button onClick={addPerson}>add</button>
    </div>
  );

}

export default PersonList;