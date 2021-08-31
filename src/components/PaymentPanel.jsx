import React, { useContext } from "react";
import Payment from "./Payment";
import { Context } from "../context/State";

export default function PaymentPanel({ id, payments }) {
  const { addPayment } = useContext(Context);

  return (
    <div className="PaymentPanel">
      <div className="PaymentList">
        { payments.map(payment => <Payment key={payment.id} id={id} payment={payment}/>) }
      </div>
      <button class="AddPaymentButton" onClick={() => addPayment(id)}>add</button>
    </div>
  );
}