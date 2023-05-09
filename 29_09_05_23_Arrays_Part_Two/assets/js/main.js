let carName = ["Audi,", "BMW", "Seat", "Skoda", "Mercedes"];
console.log(carName);

// Splice()
console.log("%c splice()", "color:red;background-color:gold");
// Mit Splice() können wir gezielt Elemente überschreiben/Löschen
// Erster Parameter: Wo soll hinzugefügt werden?
// Zweiter Parameter: Wie viele Elemente sollen gelöscht/überschrieben werden?
// Dritter Parameter: Neue Elemente

// Fügt VW und Fiat ab Index 2 ein
carName.splice(2, 0, "VW", "Fiat");
console.log(carName);

// BMW löschen
carName.splice(1, 1);
console.log(carName);

// SEAT löschen
carName.splice(3, 1);
console.log(carName);

// Audi zu Audolino verwandeln
carName.splice(0, 1, "Audolino");
console.log(carName);

// Slice()
console.log("%c Slice()", "color:red;background-color:gold");
// Mit Slice() können wir einen Teil eines Aray ausschneiden und geben ein neues Array zurück
// Erster Parameter: Start
// Zweiter Parameter: Ende (optional), Eingabe nicht inkludiert

let newCars = carName.slice(0, 3);
console.log(newCars);
console.log(carName); // Haupt Array bleibt unverändert

// Sort()
console.log("%c sort()", "color:red;background-color:gold");
// Mit Sort() können wir Inhalte eines Arrays sortieren
// Wichtig: Sort wandelt erstmal alles in einem String und schaut  dann nach den utf16 Code was höher/niedriger ist. Daher sortiert er immer nu die erste Zahl Zeichen. Egal ob 222 oder 22 ist zb.

// Number Sort
let number1 = [1, 20, 3, 7, 9, 4, 6];
console.log(number1);
number1.sort();
console.log(number1);

// String Sort

let string = ["B", "D", "A", "K", "C"];
console.log(string);
string.sort();
console.log(string);

// Big Number Sort

let number2 = [10, 2, 2000, 313, 111];
console.log(number2);
number2.sort();
console.log(number2);

// sort() mit Funktion und callback function
console.log(
  "%c sort() mit Funktion und callback function",
  "color:red;background-color:gold"
);

let numberSort = [12, 33, 64, 1, 333, 891, 8, 90, 9];
console.log(numberSort);

// Lange Schreibweise
const vergleichFunktion = (a, b) => {
  // 1. < (kleiner) ----> a kommt zuerst
  // 2. = (gleich) -----> nichts
  // 3. > (größer)----> b kommt zuerst
  return a - b;
};
numberSort.sort(vergleichFunktion);
console.log(numberSort);

// Kurze Schreibweise mit Callback Function
// Von klein zu groß sortiert
number2.sort((a, b) => a - b);
console.log(number2);

// Von groß zu klein sortiert
number2.sort((a, b) => b - a);
console.log(number2);

// Reverse()
// Mit reverse() können wir ein Array umkehren
console.log("%c Reverse()", "color:red;background-color:gold");

const reversNum = [0, 1, 2, 4, 8];
console.log(reversNum);

reversNum.reverse();
console.log(reversNum);

// forEach()
// forEach() ist eine Schleife die durch jedes Element des Arrays geht und diese dann ausgibt
console.log("%c forEach()", "color:red;background-color:gold");

let games = ["Call of Duty", "GTA", "WoW", "GTA San Adreas"];

// eine forEach() benötigt immer einen Parameter. Ist frei wählbar. Meist elm für Element
games.forEach((elm) => {
  console.log(elm);
});

let images = [
  "https://picsum.photos/200",
  "https://picsum.photos/201",
  "https://picsum.photos/202",
  "https://picsum.photos/203",
  "https://picsum.photos/204",
  "https://picsum.photos/205",
];

// holt mir die Bilder

const bilderOutput = document.querySelector("#bilder");

images.forEach((elt, index) => {
  console.log({ elt });
  console.log({ index });

  bilderOutput.innerHTML += `<img src="${elt}" alt="randomImg${index}">`;
});

// map()
console.log("%c map()", "color:red;background-color:gold");
// map() geht durch jedes ELement des Arrays durch und gibt ein NEUES array zurück
// map verändert das ursprungs array NICHT

let number3 = [10, 5, 2, 1];

let number4 = number3.map((Pfannkuchen) => {
  return Pfannkuchen * 2;
});
console.log(number4);

//forEach() vs map ()
// forEach() gibt ungs kein neues Array zurück
// map() gibt uns ein neues Array zurück. Wenn ich mit den Werten später weiterarbeiten muss, ist map() the way to go

const studentNames = ["Nina", "Tom", "Simon"];

// Macht beides das Gleiche vorerst
studentNames.forEach((name) => console.log(name.toUpperCase()));
studentNames.map((name) => console.log(name.toUpperCase()));

// forEach() weil forEach kein Array returned
console.log(studentNames.forEach((firstName) => firstName.toUpperCase()));
// map() weil map ein Array returned
console.log(studentNames.map((firstName) => firstName.toUpperCase()));

// Werte in einer neuen Variable speichern
// forEach
// geht nicht weil forEach uns kein neues Array zurück gibt
const forEachLowNames = studentNames.forEach((knödel) => knödel.toLowerCase());
console.log(forEachLowNames);

// map
// geht nicht weil forEach uns kein neues Array zurück gibt
const mapLowNames = studentNames.map((knödel) => knödel.toLowerCase());
console.log(mapLowNames);

//Das Ursprungs Array bleibt unverändert
console.log(studentNames);
