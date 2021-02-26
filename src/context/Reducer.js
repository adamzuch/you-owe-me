import { nanoid } from "nanoid";
import { findObjectInArray, replaceObjectInArray } from "../common";

export default (state, action) => {

  switch (action.type) {

    case "ADD_PAYMENT": {
      const { persons } = state;
      const { personId } = action.payload;
      const [ person, index ] = findObjectInArray(persons, "id", personId);
      return {
        ...state,
        persons: replaceObjectInArray(persons, index, {
          ...person, 
          payments: person.payments.concat({ id: nanoid(), value: 0 })
        })
      };
    }

    case "ADD_PERSON": {
      const { persons } = state;
      return {
        ...state,
        persons: persons.concat({ id: nanoid(), name: "", payments: [] })
      };
    }

    case "DELETE_PAYMENT": {
      const { persons } = state;
      const { personId, paymentId } = action.payload;
      const [ person, index ] = findObjectInArray(persons, "id", personId);
      return {
        ...state,
        persons: replaceObjectInArray(persons, index, {
          ...person,
          payments: person.payments.filter(payment => payment.id !== paymentId)
        })
      };
    }

    case "DELETE_PERSON": {
      const { persons } = state;
      const { personId } = action.payload;
      return {
        ...state,
        persons: persons.filter(person => person.id !== personId)
      };
    } 

    case "SET_PERSON_NAME": {
      const { persons } = state;
      const { personId, personName } = action.payload;
      const [ person, index ] = findObjectInArray(persons, "id", personId);
      return {
        ...state,
        persons: replaceObjectInArray(persons, index, { ...person, name: personName })
      };
    }

    case "SET_PAYMENT_VALUE": {
      const { persons } = state;
      const { personId, paymentId, paymentValue } = action.payload;

      // const parsedPaymentValue = isNaN(parseFloat(paymentValue)) ? paymentValue : parseFloat(paymentValue);

      const [ person, personIndex ] = findObjectInArray(persons, "id", personId);
      const [ payment, paymentIndex ] = findObjectInArray(person.payments, "id", paymentId);
      return {
        ...state,
        persons: replaceObjectInArray(persons, personIndex, {
          ...person,
          payments: replaceObjectInArray(person.payments, paymentIndex, { ...payment, value: paymentValue })
        })
      }
    }

    default: return state;
  }
}