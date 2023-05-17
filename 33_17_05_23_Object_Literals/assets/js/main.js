const person = {
  name: "Alpay",
  age: 33,
  adult: true,
  city: "Halle",
};
// Reihenfolge ist bei den Values und Key egal. Der Browser sortiert diese nach Alphabet

// # Zugriff auf die Values
// Fachjargon: das ist eine Dotnotation-Punkt Schreibweise
console.log(person);
console.log(person.name);
// Mehrere Namen können zb. in einem Array gespeichert werden ["Alpay", "Celik"]
// Funktionen innerhalb eines Objekts sind Methoden zb. Age: function()

// Bracket notation - Klammer Schreibweise
console.log(person["age"]);

// # Werte eines Objektes neu zuweisen

person.name = "Uwe Siemens";
console.log(person.name);

// # Werte im Objekt hinzufügen

person.job = "Trainer";
console.log(person);

// # Werte im Objekt löschen

delete person.job;
console.log(person.job);

// # Methoden in Objekten

const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => {
    return a - b;
  },
};

console.log(calculator.add(2, 5));

const person2 = {
  name: "Ingo Siemens",
  age: 35,
  adult: true,
  city: "Moormerland",
  greet: () => {
    return `Hallo mein Name ist ${person2.name}, ich bin ${person2.age} Jahre alt und komme aus ${person2.city}`;
  },
  greetThree: function () {
    return `Hallo mein Name ist ${this.name}, ich bin ${this.age} Jahre alt und komme aus ${this.city}`;
  },
};
console.log(person2.greet());

// # Declaration der Funktion außerhalb der Funktion

const greetTwoFunction = () => {
  return `Hallo mein Name ist ${person2.name}, ich bin ${person2.age} Jahre alt und komme aus ${person2.city}`;
};

// # dem key greetTwo in dem person2 Objekt wird die Funtkion greetTwoFunction zugewiesen

person2.greetTwo = greetTwoFunction;

console.log("greetTwo:", person2.greetTwo());

// # THIS Keyword
// Bei Function Declarations wird das this-Schlüsselword dynamisch festgelegt, abhängig vom Aufrufkontext
// Arrow Functions erben das this-Schlüsselwort lexikalisch, heißt, dass es den Wert des umgebenden kontext ergb und nicht dynamisch festgelt wird

const greetThreeFunction = () => {
  return `Hallo mein Name ist ${this.name}, ich bin ${this.age} Jahre alt und komme aus ${this.city}`;
};
console.log("greetTwo in person2:", person2.greetTwo());
console.log("greetTwo außerhalb person2", greetThreeFunction());

// # Objekte und for in Schleife (Only für Objekte)

const person3 = {
  name: "Alpay",
  age: 33,
  adult: true,
  city: "Halle",
};
for (let key in person3) {
  console.log(key + ":" + person3[key]);
}

// # Objekte =>keys

const keys = Object.keys(person3);
console.log(keys);

// # Objekte => Values
const values = Object.values(person3);
console.log(values);

// # Objekte => entries

const entries = Object.entries(person3);
console.log(entries);

// # Entries zugreifen nach dieser Schreibweise

console.log(entries[2][1]);

const array = [2, 5, 1, [8, 9, [2, 4, 5, [3, 32]]]];
console.log(array[3][2][3][1]);
// * Ergebnis soll 32 aus dem Array angezeigt werden. Zur Hilfe am besten console log nehmen und die Arrays nach und nach aufklappen

// # Objekte innerhalb von Objekten

const person4 = {
  name: "Magda",
  citiy: "Hamburg",
  job: "Trainer",
  socialMedia: {
    linkedin: "linkedinPage",
    instagram: "instagramPage",
    "tik-tok": "tiktokPage",
  },
  hobbies: ["coding", "zeichnen", "gaming"],
};

const valuesPerson4 = Object.values(person4.socialMedia);
console.log(valuesPerson4[0]);
console.log(person4.socialMedia.linkedin);
console.log(person4.socialMedia["tik-tok"]);
console.log(person4.hobbies);

// # Objekte in Arrays

const superTrainer = [
  { name: "Ingo", city: "Moormerland" },
  { name: "Magda", city: "Hamburg" },
  { name: "Marzio", city: "Bayern" },
];
// Jedes Objekt in einem Array wird in eckigen Klammern gespeichert. Danach wird über ein loop forEach ausgeben.
superTrainer.forEach((trainer) => {
  console.log(`${trainer.name} kommt aus ${trainer.city}`);
  const html = `<div>
  <h2> ${trainer.name} kommt aus ${trainer.city} </h2>`;
  document.body.insertAdjacentHTML("afterbegin", html);
});
