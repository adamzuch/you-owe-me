import React, { useContext } from "react";
import { Context } from "../context/State";
import Person from "./Person";

import Grid from '@material-ui/core/Grid';

export default function PersonPanel() {
  const { persons, addPerson } = useContext(Context);

  return (
    <div className="PersonPanel">
      <div className="PersonListWrapper">
        <div className="AddPersonPanel"><button onClick={addPerson}>add</button></div>
        <div className="PersonList">
          <Grid
            container
            direction="column-reverse"
            justify="center"
            alignItems="center"
          >
            { persons.map(person => <Person key={person.id} person={person}/>) }
          </Grid>
        </div>
      </div>
    </div>
  );

}