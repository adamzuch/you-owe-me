export function resultToString(result) {
  const { debtor, creditor, value } = result;
  const noName = "Someone";
  return `${debtor ? debtor : noName} owes ${creditor ? creditor : noName} ${value.toFixed(2)}`;
}
