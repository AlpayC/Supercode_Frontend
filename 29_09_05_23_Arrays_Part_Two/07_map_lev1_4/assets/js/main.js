// map()
// return
// toFixed() || Math.round()
// celsius = (℉ - 32) / 1.8

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

function multiplyAndSortAndRound(fahrenheit) {
  const multipliedArray = fahrenheit.map((num) => (num - 32) / 1.8);
  const sortedArray = multipliedArray.sort((a, b) => a - b);
  const rounded = sortedArray.map((num) => num.toFixed(0));
  return rounded;
}
const output = multiplyAndSortAndRound(fahrenheit);
console.log(output);
