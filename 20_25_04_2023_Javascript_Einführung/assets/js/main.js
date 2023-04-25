console.log("hallo");

// Variablen

let num1 = 33;
const num2 = 44;

console.log("num1 " + num1);
console.log({num2});

// LET
let name = ("Alpay");
console.log(name);

name = "ALPAY2";
console.log(name);

// CONST

const secondname = "Celik";
console.log(secondname);

// fixe vergebene werte bleiben konstant

console.log(num1+num2);


// STRINGS

let lastname = "Celik"
console.log(lastname);

// NUMBERS

let startNum = 0;
console.log(startNum);

// Boolean
console.log (true);
console.log(false);

// Konventionen
// camelCase erster Buchstabe klein und alles zusammen

// NoGo
let myfirstvariable = "text123";
// let $myfirstvariable = "text1234";


const a ="alpay";
const A = "ALPAY";

console.log(a,A);

// STRING Concatenation

const superCodeName="SuperCode";
const city = "Düsseldorf"

console.log(superCodeName, city);

console.log("Die Firma " + superCodeName + " befindet sich in " + city);

let superName = "Timo";
let timoCity = "Bielefeld";

console.log(superName + " wohnt in der schönen City " + timoCity);


// Arithmetische Operationen

let x  = 5;
let y  = 3;
let z  = 15;

// addieren
console.log(x + x);

// subtrahieren
console.log(z - x);

// multiplizieren
console.log(x * y);

// dividieren
console.log(z / y);

// Moduloperator
console.log(x % y);
console.log(x % z);

// Increment
console.log({ x });
x++;
x++;
x++;
console.log({ x });

// Decrement
console.log({ y });
y--;
y--;
y--;
console.log({ y });


// Output

document.write("Hallo Leute");
document.write("<h1 class='test'> Hallo Kurs </h1>");
window.alert("Hallo")

// Input

window.prompt("Bitte Name hier eintragen")

let windowPrompt = window.prompt(
    "bitte Vor- und Nachname", "Thomas Mülller"
)

console.log(windowPrompt );

let confirm = window.confirm("Stimmen sie den Cookies zu?");
console.log(confirm);