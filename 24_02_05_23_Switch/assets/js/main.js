// Switch

let zahl = 3;

switch (zahl) {
  case 1:
    console.log("Die Zahl ist 1");
    break; // nach jeden Case benötigen wir ein break, ansnsten geht er direkt zum nächsten Case. Wir sagen JS hör auf.
  case 2:
    console.log("Die Zahl ist 2");
    break;
  case 3:
    console.log("Die Zahl ist 3");
    break;
  default:
    console.log("Die Zahl ist nicht 1, 2 oder 3");
}

let fruit = "Apfel";

switch (fruit) {
  case "Apfel":
    console.log("Du bist ein Apfel");
    break;
  case "Banane":
    console.log("Du bist ein Banene");
    break;
  case "Orange":
    console.log("Du bist ein Orange");
    break;

  default:
    break;
}

// Ternary Operator
let hungry = true;

hungry
  ? console.log("Ja, ich habe hunger")
  : console.log("Nein, ich habe keinen hunger");

hungry ? console.log("ich habe Hunger") : console.log("ich habe kein Hunger");

let zahl2 = 10;

let ergebnis =
  zahl2 > 5
    ? "Ja, die Zahl ist kleiner als 5"
    : "Nein, die zahl ist kleiner als 5";

console.log(ergebnis);

// Template literals

let firstName3 = "Magda";
let city = "Hamburg";

let satz = `${firstName3} wohnt in ${city}`;

console.log(satz);
