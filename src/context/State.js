import React, { createContext, useReducer } from "react";
import { nanoid } from "nanoid";
import Reducer from "./Reducer";

// initial state
const initialState = {
  persons: [
    {
      id: nanoid(),
      name: "Bob",
      payments: [
        {
          id: nanoid(),
          value: "33"
        },
        {
          id: nanoid(),
          value: "12"
        }
      ] 
    },
    {
      id: nanoid(),
      name: "Alice",
      payments: [
        {
          id: nanoid(),
          value: "94"
        }
      ]
    }
  ],
  results: [
    {
      id: nanoid(),
      debtor: "Bob",
      creditor: "Alice",
      value: 48.5
    }
  ]
}

// create context
export const Context = createContext(initialState);

// provider component
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // component actions dispatched to Reducer
  function addPayment(personId) {
    dispatch({ type: "ADD_PAYMENT", payload: { personId } });
  }
  function addPerson() {
    dispatch({ type: "ADD_PERSON", payload: {} });
  }
  function deletePayment(personId, paymentId) {
    dispatch({ type: "DELETE_PAYMENT", payload: { personId, paymentId } });
  }
  function deletePerson(personId) { 
    dispatch({ type: "DELETE_PERSON", payload: { personId } });
  }
  function setPersonName(personId, personName) {
    dispatch({ type: "SET_PERSON_NAME", payload: { personId, personName } });
  }
  function setPaymentValue(personId, paymentId, paymentValue) {
    dispatch({ type: "SET_PAYMENT_VALUE", payload: { personId, paymentId, paymentValue } });
  }

  return (
    <Context.Provider value={{ 
      persons: state.persons,
      results: state.results,
      addPayment,
      addPerson,
      deletePayment,
      deletePerson,
      setPersonName,
      setPaymentValue
    }}>
      { children }
    </Context.Provider>
  );
}