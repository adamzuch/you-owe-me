import React, { useContext } from "react";
import { Context } from "../context/State";
import PaymentPanel from "./PaymentPanel";
import { HiMinusCircle } from "react-icons/hi";

function Person({ person }) {
  const { changePersonName, deletePerson } = useContext(Context);
  return (
    <div className="Person">
      <input 
        className="PersonInput"
        type="text" 
        placeholder="Enter a name..."
        value={person.name} 
        onChange={e => changePersonName(person.id, e.target.value)}
      />
      <button id="DeleteButton" onClick={() => deletePerson(person.id)}><HiMinusCircle size={18} /></button>
      <PaymentPanel id={person.id} payments={person.payments}/>
    </div>
  );
}

export default Person;
