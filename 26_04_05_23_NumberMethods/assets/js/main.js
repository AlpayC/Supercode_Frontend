// toFixed()
// Die toFixed Methode rundet auf oder ab. Gleichzeitig wandelt sie eine Zahl in einen String um

const num = 14.23233;
console.log(num.toFixed());
console.log(typeof num.toFixed());

// Als Argument können wir eine Nummer mitgeben, wo sie in diesem Fall zwei Stellen nach dem . rundet

console.log(num.toFixed(3));

// Number()
// Wandelt String in eine Nummer
const num2 = "223";
console.log(typeof num2);
console.log(Number(num2));

// Math Object Methoden

// So sehen wir alle Methoden von Math
console.log(Math);

// Math.round()
// die Math.round Methode rundet wie toFixed ebenfalls auf oder ab

const num4 = 132.265;
console.log(Math.round(num4));

// Math.ceil
// Rundet immer auf

const num5 = 14.00000001;

console.log(Math.ceil(num5));

// Math.floor
// Rundet immer ab

const num6 = 14.6555;

console.log(Math.floor(num6));

// Math.random
// Gibt eine zufällige Zahl raus
console.log(Math.random());

// Gib uns eine Zahl zwischen 1-10 raus;
console.log(Math.round(Math.random() * 10));

// Gib uns eine Zahl zwischen 1-11;
console.log(Math.round(Math.random() * 10 + 1));
