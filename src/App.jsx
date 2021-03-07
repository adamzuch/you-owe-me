import React from "react";
import { hot } from "react-hot-loader";
import "./App.sass";
import { Provider } from "./context/State";
import PersonList from "./components/PersonList";
import ResultList from "./components/ResultList";

function App() {
  return (
    <Provider>
      <div className="App">
        <div className="Header">
          <h1>paysplit</h1>
        </div>
        <div className="Wrapper">
          <PersonList />
          <ResultList />
        </div>
      </div>
    </Provider>
  );
}

export default hot(module)(App);