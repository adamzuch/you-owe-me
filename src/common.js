import { nanoid } from "nanoid";

export function replaceObjectInArray(arr, i, obj) {
  return Array.prototype.concat(
    arr.slice(0, i),
    [obj],
    arr.slice(i + 1)
  );
}

export function findObjectInArray(arr, prop, value) {
  const i = arr.findIndex(item => item[prop] === value);
  return [ arr[i], i ];
}

export function calculate(state) {
  const { persons } = state;

  const balances = getBalances(persons);
  const results = determinePayments(balances);
  return {
    ...state,
    results: results
  };
}

function determinePayments(balances) {
  const results = [];
  while (balances.length > 1 && !withinError(balances[0].value)) {
    const [ currentName, currentBalance ] = balances[0];
    // find another balance with different polarity to exchange with
    let i = 0;
    let [ otherName, otherBalance ] = balances[i];
    do {
      i += 1;
      [ otherName, otherBalance ] = balances[i];
    } while (i < balances.length && hasSamePolarity(currentBalance, otherBalance));

    // do transaction
    const paymentAmount = Math.min(Math.abs(currentBalance), Math.abs(otherBalance));
    balances[0][1] += paymentAmount * (currentBalance > 0 ? -1 : 1);
    balances[i][1] += paymentAmount * (otherBalance > 0 ? -1 : 1);

    // record transaction
    results.push({
      "id": nanoid(),
      "creditor": currentBalance > 0 ? currentName : otherName,
      "debtor": currentBalance > 0 ? otherName : currentName,
      "value": paymentAmount
    });

    // delete balances which have been resolved (i.e. ~0)
    if (withinError(balances[i][1])) balances = Array.prototype.concat(balances.slice(0, i), balances.slice(i + 1));
    if (withinError(balances[0][1])) balances = Array.prototype.concat(balances.slice(1));
  }
  return results;
}

function getBalances(persons) {
  // pre-process state to get array of payment sums as well as sum of all payments.
  let totals = [];
  let total = 0;
  for (const person of persons) {
    const payments = person.payments.map(payment => isNaN(payment.value) ? 0 : parseFloat(payment.value));
    const paymentsSum = payments.reduce(getSum, 0);

    total += paymentsSum;
    totals.push({ name: person.name, total: paymentsSum });
  }

  // once total sum of all payments is known we can calculate who owes money (-ve value) and who is owed (+ve).
  const contribution = total / persons.length;
  return totals.map(person => [
    person.name,
    (person.total - contribution)
  ]);
}

const hasSamePolarity = (x, y) => XNOR(x > 0, y > 0);

const XNOR = (a, b) => (a && b) || (!a && !b);

const withinError = (value) => value > -0.01 && value < 0.01;

const getSum = (accumulator, currentValue) => accumulator + currentValue;