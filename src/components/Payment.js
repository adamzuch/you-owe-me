import React, { useContext } from "react";
import { Context } from "../context/State";

function Payment({ id, payment }) {
  const { deletePayment, setPaymentValue } = useContext(Context);
  const isValid = !isNaN(payment.value);
  return (
    <div className="Payment">
      {/* <div>{payment.value}</div> */}
      <input 
        className={isValid ? "ValidPaymentInput" : "InvalidPaymentInput"}
        type="text" 
        value={payment.value} 
        onChange={e => setPaymentValue(id, payment.id, e.target.value)}
      />
      <button onClick={() => deletePayment(id, payment.id)}>delete</button>
    </div>
  );
}

export default Payment;