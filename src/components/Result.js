import React from "react";

function Result({ result }) {
  const { debtor, creditor, value } = result;
  return (
    <div className="result">
      {`${debtor} pays ${value} to ${creditor}`}
    </div>
  );
}

export default Result;