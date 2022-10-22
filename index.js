
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let total = 0;
  total += fromN;

  if (fromN >= toN) {
    return total;
  }

  return total + sum(fromN + 1, toN);

}

module.exports = sum;
