import React, { useContext } from "react";
import { Context } from "../context/State";
import { resultToString } from "./common";
import Result from "./Result";

function ResultList() {
  const { results } = useContext(Context);

  return (
    <div className="ResultList">
      <div className="CopyButton">
        <button 
          onClick={() => copyResultToClipboard(results)}
          disabled={results.length === 0}
        >
          copy
        </button>
      </div>
      { results.length > 0 ? results.map(result => <Result key={result.id} result={result}/>) : "Payments already balanced" }
    </div>
  );
}

function copyResultToClipboard(results) {
  const textualResult = results.map(result => resultToString(result)).join("\n");
  if (navigator.clipboard) {
    copyTextToClipboard(textualResult);
  }
}

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text).then(
    console.log("Text copied successfully"), 
    err => console.log(`Error copying text: ${err}`));
}

export default ResultList;