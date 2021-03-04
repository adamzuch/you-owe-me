import React, { createContext, useReducer } from "react";
import { nanoid } from "nanoid";
import Actions from "./actions";
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
    dispatch({ type: Actions.ADD_PAYMENT, payload: { personId } });
    refreshResults();
  }
  function addPerson() {
    dispatch({ type: Actions.ADD_PERSON, payload: {} });
    refreshResults();
  }
  function changePaymentValue(personId, paymentId, paymentValue) {
    dispatch({ type: Actions.CHANGE_PAYMENT_VALUE, payload: { personId, paymentId, paymentValue } });
    refreshResults();
  }
  function changePersonName(personId, personName) {
    dispatch({ type: Actions.CHANGE_PERSON_NAME, payload: { personId, personName } });
    refreshResults();
  }
  function deletePayment(personId, paymentId) {
    dispatch({ type: Actions.DELETE_PAYMENT, payload: { personId, paymentId } });
    refreshResults();
  }
  function deletePerson(personId) { 
    dispatch({ type: Actions.DELETE_PERSON, payload: { personId } });
    refreshResults();
  }
  function refreshResults() {
    dispatch({ type: Actions.REFRESH_RESULTS, payload: {} })
  }

  // expose actions to components by passing functions as props
  return (
    <Context.Provider value={{ 
      persons: state.persons,
      results: state.results,
      addPayment,
      addPerson,
      changePaymentValue,
      changePersonName,
      deletePayment,
      deletePerson,
    }}>
      { children }
    </Context.Provider>
  );
}