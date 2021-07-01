import React, { useContext } from "react";
import { Context } from "../context/State";
import Person from "./Person";

import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Paper } from "@material-ui/core";

export default function PersonPanel() {
  const { persons, addPerson } = useContext(Context);

  return (
    <Paper><Box p={2}>
        <Box p={1} align="center">
          <Button variant="contained" color="primary" onClick={addPerson}>Add Person</Button>
        </Box>
        <Grid
          container
          direction="column-reverse"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          { persons.map(person => <Grid item><Person key={person.id} person={person}/></Grid>) }
        </Grid>
    </Box></Paper>
  );

}