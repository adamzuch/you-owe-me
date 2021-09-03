import React, { useContext } from "react";
import { Context } from "../context/State";
import PaymentPanel from "./PaymentPanel";

function Person({ person }) {
  const { changePersonName, deletePerson } = useContext(Context);
  return (
    <div className="Person">
      <input 
        className="PersonInput"
        type="text" 
        placeholder="Enter person's name"
        value={person.name} 
        onChange={e => changePersonName(person.id, e.target.value)}
      />
      <button id="DeleteButton" onClick={() => deletePerson(person.id)}>delete</button>
      <PaymentPanel id={person.id} payments={person.payments}/>
    </div>
  );
}

export default Person;
