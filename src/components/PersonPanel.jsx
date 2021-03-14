import React, { useContext } from "react";
import { Context } from "../context/State";
import Person from "./Person";

export default function PersonPanel() {
  const { persons, addPerson } = useContext(Context);

  return (
    <div className="PersonPanel">
      <div className="PersonListWrapper">
        <div className="AddPersonPanel"><button onClick={addPerson}>add</button></div>
        <div className="PersonList">
          { persons.map(person => <Person key={person.id} person={person}/>) }
        </div>
      </div>
    </div>
  );

}