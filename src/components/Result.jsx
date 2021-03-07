import React from "react";
import { resultToString } from "./common";

function Result({ result }) {
  return (
    <div className="Result">
      {resultToString(result)}
    </div>
  );
}

export default Result;