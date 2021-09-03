import React, { useContext } from "react";
import { Context } from "../context/State";

function Payment({ id, payment }) {
  const { deletePayment, changePaymentValue } = useContext(Context);
  const isValid = !isNaN(payment.value);
  return (
    <div className="Payment">
      <input className="PaymentInput"
        className={isValid ? "ValidPaymentInput" : "InvalidPaymentInput"}
        type="text"
        placeholder="Enter payment amount" 
        value={payment.value} 
        onChange={e => changePaymentValue(id, payment.id, e.target.value)}
      />
      <button id="DeleteButton" onClick={() => deletePayment(id, payment.id)}>delete</button>
    </div>
  );
}

export default Payment;