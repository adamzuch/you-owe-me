import React, { useContext } from "react";
import { Context } from "../context/State";
import PaymentPanel from "./PaymentPanel";

import { Paper, Grid } from "@material-ui/core";
import { Box, TextField } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";

function Person({ person }) {
  const { changePersonName, deletePerson } = useContext(Context);
  return (
    <Paper>
      <Box p={1}><Grid 
        container 
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <TextField
            variant="outlined"
            label="Name"
            value={person.name}
            placeholder="Enter a name..."
            onChange={e => changePersonName(person.id, e.target.value)}
          >
          </TextField>
        </Grid>
        <Grid item>
          <IconButton
            color="secondary"
            onClick={() => deletePerson(person.id)}
          >
            <Close/>
          </IconButton>
        </Grid>
      </Grid></Box>
      <Box p={2}><PaymentPanel id={person.id} payments={person.payments}/></Box>
    </Paper>
  );
}

export default Person;
