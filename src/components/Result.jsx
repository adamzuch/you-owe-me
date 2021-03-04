import React from "react";

function Result({ result }) {
  const { debtor, creditor, value } = result;
  return (
    <div className="result">
      {`${debtor} pays ${value.toFixed(2)} to ${creditor}`}
    </div>
  );
}

export default Result;