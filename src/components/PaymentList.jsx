import React, { useContext } from "react";
import Payment from "./Payment";
import { Context } from "../context/State";

function PaymentList({ id, payments }) {
  const { addPayment } = useContext(Context);

  return (
    <div className="PaymentList">
      { payments.map(payment => <Payment key={payment.id} id={id} payment={payment}/>) }
      <button onClick={() => addPayment(id)}>add</button>
    </div>
  );

}

export default PaymentList;