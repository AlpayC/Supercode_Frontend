// Return
// Das Return statement beendet eine Funktion und gibt einen Wert zurück

// Beispiel
function returnSomething() {
  return "Hello World";
  //   Das werden wir nicht sehen da es nicht bis zum log kommt
  console.log("Hallo Leute");
}

function add(a, b) {
  let x = a + b;
  return x;
}

console.log(add(3, 5));

function addMore(c, d) {
  return c + d;
}
console.log(addMore(5, 10));

// Arrow Funktion
// ist neu seit ES6
