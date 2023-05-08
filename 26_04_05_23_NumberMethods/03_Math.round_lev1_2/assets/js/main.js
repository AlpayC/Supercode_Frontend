let numbers = [3.14, 193.4464, 0.8596433607, -2.940629089];

function roundNum() {
  numbers.forEach((num) => {
    console.log(Math.round(num));
  });
}

roundNum(numbers);
