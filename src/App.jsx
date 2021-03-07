import React from "react";
import { hot } from "react-hot-loader";
import "./App.sass";
import { Provider } from "./context/State";
import PersonPanel from "./components/PersonPanel";
import ResultPanel from "./components/ResultPanel";

function App() {
  return (
    <Provider>
      <div className="App">
        <div className="Header">
          <h1>paysplit</h1>
          Resolve group payments instantly. Share results with copy/paste.
        </div>
        <div className="Wrapper">
          <PersonPanel />
          <ResultPanel />
        </div>
        <div className="Footer">
          Created by Adam Zuchowicz. Source code on <a href="https://www.github.com/adamzuch/paysplit">GitHub</a>
        </div>
      </div>
    </Provider>
  );
}

export default hot(module)(App);