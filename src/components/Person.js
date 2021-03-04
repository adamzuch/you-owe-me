import React, { useContext } from "react";
import { Context } from "../context/State";
import PaymentList from "./PaymentList";

function Person({ person }) {
  const { changePersonName, deletePerson } = useContext(Context);
  return (
    <div className="Person">
    <input 
        className="PersonInput"
        type="text" 
        value={person.name} 
        onChange={e => changePersonName(person.id, e.target.value)}
      />
      <button onClick={() => deletePerson(person.id)}>delete</button>
      <PaymentList id={person.id} payments={person.payments}/>
    </div>
  );
}

export default Person;
