import React, { useContext } from "react";
import Payment from "./Payment";
import { Context } from "../context/State";

import { Box, Button, Container, Grid } from "@material-ui/core";

export default function PaymentPanel({ id, payments }) {
  const { addPayment } = useContext(Context);

  return (
    <Container>
      <Box align="center"><Button 
        variant="contained" 
        color="primary"
        onClick={() => addPayment(id)}  
      >
        Add Payment
      </Button></Box>
      <Grid 
        container
        direction="column"
      >
        { payments.map(payment => <Grid item><Payment key={payment.id} id={id} payment={payment}/></Grid>) }
      </Grid>
    </Container>
  );
}