// # Wiederholung
// Zum testen ob richtig eingebunden
console.log("geht");

// - Wie kann man eine H1 mit den Text "Hallo leute" einfügen?
document.write("<h1>" + " Hallo Leute" + "</h1>");
document.write("<h1> Hallo Leute nochmal </h1>");

// - Datentypen
let datatype = "10"; // String
// console.log(datatype);
let datatype1 = 10; //Number
let datatype2 = "Hallo Magda"; //String
// console.log(datatype1);
let datatype3 = true; //Boolean
let datatype4 = false;
// console.log(datatype3);
let datatype5 = 22; // Number
let datatype6 = datatype1 + datatype5; //Number

// - Was ist der Unterschied von let und const?
// let: Wir können Wert der Variablen überschreiben
// const: Wert kann nicht überschrieben werden

// - Welche Schreibweise hat sich als best Practice bewährt?
// camelCase

// - Ich möchte meine Variable "Marzios super duper Variable" bennenen. Wie schreib ich das richtig?
let marzioSuperDuperVariable = "Marzio";
let city = "Starnberg";

// - Wie kann ich ein String zusammenfügen das dieser Satz ensteht mit zwei Variablen " Ich heiße Marzio und Wohne in Starnberg"
// console.log("Ich heiße " + marzioSuperDuperVariable + " und wohne in " + city);

// - Arithmetische Operatoren
let a = 10;
let b = 5;
let c = 3;

// - addieren a und c
// console.log(a + c);
// - subtrahieren b von a
// console.log(a - b);
// - dividieren a durch b
// console.log(a / b);
// - multiplizieren b mal c
// console.log(b * c);
// - bleibt ein restwert wenn ich a durch c teile?
// console.log(a % c);
// - eins addieren
a++;
a--;

// ! NEUE THEMEN

// # ====== Comparison =====
// - == vergleicht die Werte
// - === vergleicht Werte und Datentypen
// console.log(3 == "3"); //vergleicht Werte
// console.log(3 === "3"); // vergleicht Werte & Datentypen

// console.log(1 == 1); //true
// console.log(1 == 2); //false
// console.log("5" == 5); //true
// console.log(1 == "1"); // true
// console.log(7 == "6"); // false

// - != nicht gleicher Wert
// - !== nicht gleicher Wert & Datentyp
// console.log(3 != 3); //false
// console.log(3 !== 3); //false
// console.log(4 !== "4"); //true

// - > größer als
// - < kleiner als
// - >= größer gleich
// - <= kleiner gleich
// console.log(3 > 2); //true
// console.log(4 < 6); //treu
// console.log(4 >= 6); //false
// console.log(4 >= 4); //true
// console.log("B" > "A"); //true
// console.log("B" > "a"); //false

// # Elemente selektieren
// - getElementbyId()
const mainHeadline = document.getElementById("main-headline");
// Damit sprechen wir Elemente über die ID an
// Id aus dem HTML: main-headline
// Wir bekommen das Element zurück
console.log(mainHeadline);
// Wir bekommen den Inhalt des Elements zurück
console.log(mainHeadline.innerHTML);

// - querySelector()
// Damit können wir alles ansprechen: Ids ("#"), Klassen (".") oder einfach Elemente ("h2")

// Ergriffen über ID
const secondayHeadline = document.querySelector("#secondary-headline");
console.log(secondayHeadline);

// Ergriffen über class
const secondayHeadline2 = document.querySelector(".test");
console.log(secondayHeadline2);

// Ergriffen über html Element h2
const secondayHeadline3 = document.querySelector("h2");
console.log(secondayHeadline3);
console.log(secondayHeadline3.innerHTML);

// * .innerHTML

// # ===== Elemente überschreiben =====
// "mainHeadline" in Zeile 71 geholt."

// Wir können innerHTML auch verwenden, um Inhalte zu überschreiben
mainHeadline.innerHTML = "Bämmmm Text geändert, einfach so";
secondayHeadline2.innerHTML = "Hallo";
// Wir behalten den alten Wert mit += und fügen den neuen Wert hinten dran
secondayHeadline2.innerHTML += " Leute";
// Mit .style können wir auf das Styling der Elemente zugreifen
mainHeadline.style.color = "red";
//  Wie kann ich dem Element eine gelbe Hintergrundfarbe geben?
mainHeadline.style.backgroundColor = "yellow";

//* Unterschied zwischen document.write() und .innerHTML
// Mit document.write() fügen wir die Elemente immer am Ende des HTML Doms ein
// Mit .innerHTML können wir gezielt Elemente ansprechen, deren Inhalte wir verändern wollen
let divContainer = document.querySelector("#div-container");
divContainer.innerHTML = "<p> ich bin ein p-Tag </p>";
divContainer.innerHTML += "<p> ich bin noch ein p-Tag </p>";

document.write("<p> ich bin das document write p tag </p>");

// # Funktionen

// Deklarieren
// Wir erstellen die Funktion und beschreiben, was die Funktion machen soll
// mit dem Keyword "function" sagen wir JS, dass jetzt eine Funktion kommt
// "sayHi" ist der Name der Funktion, der ist frei wählbar, sollte aber sinnig sein
// () muss immer da sein
function sayHi() {
  // Das ist der Funktionskörper (der Bereich zwischen {}), darin sagen wir, was diese Funktion machen soll
  console.log("Hallo Timo");
}

// Aufrufen
// Wir müssen eine Funktion aufrufen, damit sie ausgeführt wird
// Wenn wir den Aufruf einfach in unsere JS Datei schreiben, wird die Funktion beim Aufruf der Seite ausgeführt
// Später können wir Funktionen ausführen lassen, wenn beispielsweise auf einen Button geklickt wird
sayHi();

// # Funktionen mit Paramenter

// ? Ein Parameter
// Mit Parametern können wir unsere Funktionen viel flexibler und wiederverwendbar machen

// Deklarieren
// In den Klammern schreiben wir den Parameter und reichen ihn an die Funktion weiter
// firstName ist quasie unser Platzhalter

function sayHello(fristName) {
  console.log("Hello " + fristName);
}

// Aufrufen
// "Magda" ist das Argument
sayHello("Magda");

function addMe(zahl1, zahl2) {
  console.log({ zahl1 });
  console.log({ zahl2 });

  console.log(zahl1 * zahl2);
}

// Aufrufen
// Natürlich brauchen wir dann auch 2 Argumente
addMe(40, 30);
addMe("Alpay", "Paula");
addMe("5", "4");
addMe(5, 4);
addMe("5", "4");

// Wie deklariere ich eine Funktion mit dem Namen "multiplyMe"?
// Die Funktion soll num1, num2 und num3 multiplizieren und anschließend das Ergebnis in unserem HTML im divContainer ausgeben
function multiplyMe(zahl1, zahl2, zahl3) {
  divContainer.innerHTML += "<h4>" + zahl1 * zahl2 * zahl3 + "</h4>";
}

multiplyMe(2, 3, 2);
multiplyMe(34, 3423433, 23);

let zahl4 = 5;
let zahl5 = 10;
multiplyMe(zahl5, zahl4, 3);
