import React from "react";

function Result({ result }) {
  const { debtor, creditor, value } = result;
  return (
    <div className="Result">
      {`${debtor ? debtor : "Someone"} pays ${creditor ? creditor : "Someone"} ${value.toFixed(2)}`}
    </div>
  );
}

export default Result;