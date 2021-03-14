import React, { useContext } from "react";
import { Context } from "../context/State";
import { HiMinusCircle } from "react-icons/hi"

function Payment({ id, payment }) {
  const { deletePayment, changePaymentValue } = useContext(Context);
  const isValid = !isNaN(payment.value);
  return (
    <div className="Payment">
      <input 
        className={isValid ? "ValidPaymentInput" : "InvalidPaymentInput"}
        type="text"
        placeholder="Enter a payment..." 
        value={payment.value} 
        onChange={e => changePaymentValue(id, payment.id, e.target.value)}
      />
      <button id="DeleteButton" onClick={() => deletePayment(id, payment.id)}><HiMinusCircle size={18}/></button>
    </div>
  );
}

export default Payment;