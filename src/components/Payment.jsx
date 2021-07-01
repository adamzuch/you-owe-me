import React, { useContext } from "react";
import { Context } from "../context/State";

import { Grid, TextField, IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

function Payment({ id, payment }) {
  const { deletePayment, changePaymentValue } = useContext(Context);
  const isValid = !isNaN(payment.value);
  return (
    <div className="Payment">
      <Grid 
        container 
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <TextField
            variant="outlined"
            placeholder="Enter a payment..."
            value={payment.value}
            onChange={e => changePaymentValue(id, payment.id, e.target.value)}
          >
          </TextField>
        </Grid>
        <Grid item>
          <IconButton
            color="secondary"
            onClick={() => deletePayment(id, payment.id)}
          >
            <Close/>
          </IconButton>
        </Grid>
      </Grid>
      {/* <input 
        className={isValid ? "ValidPaymentInput" : "InvalidPaymentInput"}
        type="text"
        placeholder="Enter a payment..." 
        value={payment.value} 
        onChange={e => changePaymentValue(id, payment.id, e.target.value)}
      />
      <button id="DeleteButton" onClick={() => deletePayment(id, payment.id)}><HiMinusCircle size={18}/></button> */}
    </div>
  );
}

export default Payment;