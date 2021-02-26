import React, { useContext } from "react";
import { Context } from "../context/State";
import PaymentList from "./PaymentList";

function Person({ person }) {
  const { setPersonName, deletePerson } = useContext(Context);
  return (
    <div className="Person">
      {/* <h3>{person.name}</h3> */}
    <input 
        className="PersonInput"
        type="text" 
        value={person.name} 
        onChange={e => setPersonName(person.id, e.target.value)}
      />
      <button onClick={() => deletePerson(person.id)}>delete person</button>
      <PaymentList id={person.id} payments={person.payments}/>
    </div>
  );
}

export default Person;
