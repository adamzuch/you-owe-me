import React from "react";
import { hot } from "react-hot-loader";
import "./styles/App.sass";
import { Provider } from "./context/State";
import PersonPanel from "./components/PersonPanel";
import ResultPanel from "./components/ResultPanel";

function App() {
  return (
    <Provider>
      <div className="App">
        <div className="Header">
          <h1>you owe me</h1>
          <div>Add people and the payments they made on the left. See who owes who on the right to achieve equal contribution.</div>
        </div>
        <div className="Wrapper">
          <PersonPanel />
          <ResultPanel />
        </div>
      </div>
    </Provider>
  );
}

export default hot(module)(App);