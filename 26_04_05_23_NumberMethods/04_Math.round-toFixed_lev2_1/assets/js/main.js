function roundTo(Zahl, Genauigkeit) {
  return Number(Zahl.toFixed(Genauigkeit));
}

console.log(roundTo(3.1415926535, 5)); // 3.14159
