import React, { useContext } from "react";
import { Context } from "../context/State";
import { resultToString } from "./common";
import Result from "./Result";

import { Card } from "@material-ui/core";

export default function ResultPanel() {
  const { results } = useContext(Context);

  return (
    <Card>
    <div className="ResultPanel">
      <div className="CopyPanel">
        <button 
          onClick={() => copyResultToClipboard(results)}
          disabled={results.length === 0}
        >
          copy
        </button>
      </div>
      <div className="ResultList">
        { results.length > 0 ? results.map(result => <Result key={result.id} result={result}/>) : "Payments already balanced" }
      </div>
    </div>
    </Card>
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