import React from "react";
import { hot } from "react-hot-loader";
import "./styles/App.sass";
import { Provider } from "./context/State";
import PersonPanel from "./components/PersonPanel";
import ResultPanel from "./components/ResultPanel";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Grid } from "@material-ui/core";

function App() {

  const theme = createMuiTheme({
    palette: {
      type: "light"
    },
    typography: {
      fontFamily: "Roboto"
    }
  });

  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="App">
          <div className="Header">
            <h1>paysplit</h1>
            Resolve group payments instantly. Share results with copy/paste.
          </div>
          <div className="Wrapper">
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="stretch"
            >
              <PersonPanel />
              <ResultPanel />
            </Grid>
          </div>
          <div className="Footer">
            Created by Adam Zuchowicz. Source code on <a href="https://www.github.com/adamzuch/paysplit">GitHub</a>
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default hot(module)(App);