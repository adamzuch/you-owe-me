import React from "react";
import { hot } from "react-hot-loader";
import "./styles/App.sass";
import { Provider } from "./context/State";
import PersonPanel from "./components/PersonPanel";
import ResultPanel from "./components/ResultPanel";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from "@material-ui/core";
import blue from '@material-ui/core/colors/blue';
import { Box, Container } from "@material-ui/core";
import { Typography } from "@material-ui/core";

function App() {

  const theme = createMuiTheme({
    palette: {
      type: "light",
      primary: blue
    },
    spacing: 8
  });

  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container className="App">
          <Box m={2} className="Header" textAlign="center">
            <Typography variant="h2"> paysplit</Typography>
            <Typography variant="body1">
              Resolve group payments instantly. Share results with copy/paste.
            </Typography>
          </Box>
            <Grid container alignItems="stretch">
              <Grid item xs={12} md={6}><PersonPanel /></Grid>
              <Grid item xs={12} md={6}><ResultPanel /></Grid>
            </Grid>
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default hot(module)(App);