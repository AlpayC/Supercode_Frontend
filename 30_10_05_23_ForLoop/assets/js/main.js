// for Loop

// Aufbaum vom loop

// for (Statement1, Statemen2, Statement3){
// code}
// statement1=Start/before
// statement2=condition
// statement3=Step/after

// Klassicher forLoop
// i ist frei wählbar. Steht für Index
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// * Achtung vor INFINITY LOOP
// Verursacht ein Infinity Loop weil die Bedingung nie erreicht werden kann
// Da wir mit 6 Starten kann größer gleich 5 nicht erreicht werden
// Browser stürzt ab
// for (let i = 5; i >= 4; i++) {
//     console.log(i);
//   }

// # ===== Schleife in einer Schleife "nested Loop"

for (let i = 1; i <= 3; i++) {
  console.log("Äußere Schleife Start");
  for (let j = 1; j <= 5; j++) {
    console.log(`Äußere Schleife: ${i}, Innere Schleife: ${j}`);
  }
}

// #=========== Runterzählen mit for loop

for (let i = 50; i >= 45; i--) {
  console.log(i);
}

console.log("%c for Loop mit Arrays", "color:tomato; background-color:gold");

// #==== for Schleife mit Array benutzen

let country = ["germany", "france", "spain", "italy"];

console.log(country.length);

for (let i = 0; i < country.length; i++) {
  console.log(i);
  console.log(country[i].toUpperCase());
}

// #========== "for of" Schleife
console.log("%c for of Schleife", "color:tomato; background-color:gold");
// mit ES6 gekommen. Kurz und bündig. Ohne zusätzliche Variablen und kann über alles iterieren, was einen Index hat. Zum Beispiel Array/String

let color = ["green", "red", "blue", "black"];

for (let i of color) {
  console.log(i);
}

// Wenn ich über einen String iteriere bekomme ich jeden Buchstaben einzeln

const text = "Text";

for (let i of text) {
  console.log(i);
}

// #======== verschiedene Loops =============
console.log("%c versch Loops Vergleich", "color:tomato; background-color:gold");
console.log("%c mit 2 muliplizieren", "color:tomato; background-color:gold");

let superArray = [10, 20, 30];

// for loop
console.log("%c for loop", "color:tomato; background-color:");
for (let i = 0; i < superArray.length; i++) {
  console.log(superArray[i] * 2);
}

// for of
console.log("%c for of", "color:tomato; background-color:");
for (let i of superArray) {
  console.log(i * 2);
}

// for each
console.log("%c for each", "color:tomato; background-color:");

superArray.forEach((elt) => console.log(elt * 2));

// map
console.log("%c map", "color:tomato; background-color:");
superArray.map((elt) => console.log(elt * 2));
