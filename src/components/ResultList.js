import React, { useContext } from "react";
import { Context } from "../context/State";
import Result from "./Result";

function ResultList() {
  const { results } = useContext(Context);

  return (
    <div className="ResultList">
      { results.map(result => <Result key={result.id} result={result}/>) }
    </div>
  );
}

export default ResultList;