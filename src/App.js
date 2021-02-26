import React, { useContext } from "react";
import { hot } from "react-hot-loader";
import "./App.sass";
import { Provider } from "./context/State";
import PersonList from "./components/PersonList";

function App() {
  return (
    <Provider>
      <div className="App">
        <h1 className="Header">paysplit</h1>
        <PersonList />
      </div>
    </Provider>
  );
}

export default hot(module)(App);