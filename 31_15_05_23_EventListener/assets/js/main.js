//  Onclick
const halloOutput = document.querySelector("#hello-output");
const sayHello = () => {
  hallooutput.innerHTML = "Hallo Onclick Kurs";
};

// EventListener
const sayHiBtn = document.querySelector("#say-hi-btn");
const textInput = document.querySelector("#text-input");
const selectInput = document.querySelector("#select-input");
const selectOutput = document.querySelector("#select-output");
const submitBtn = document.querySelector("#submit-btn");

// Ein EventListeneer beobachtet das ausgewählte Element und guckt, ob ein Event drauf ausgeführt wurde.
// Ein Event kann zb. ein Klick sein

// Aufbau
// 1. Welches Element soll beobachtet werden?
// zb. sayHiBtn
// 2. Eventlistener hinzufügen
// zb. sayHiBtn.addEventListener()
// 3. Event definieren
// zb. sayHiBtn.addEventListener("click")
// 4. Definieren, wass beim Event passierne soll
sayHiBtn.addEventListener("click", () => {
  halloOutput.innerHTML = "Hallo von dem Event";
});

// MouseOver
textInput.addEventListener("mouseover", () => {
  console.log("Die Maus wurde über mich bewegt");
  textInput.style.border = "3px solid black";
});

// MouseOut
textInput.addEventListener("mouseout", () => {
  console.log("Die Maus hat mich verlassen");
  textInput.style.border = "0";
});

// alte Schreibweise
textInput.addEventListener("mouseout", function () {
  console.log("Die Maus hat mich verlassen");
  textInput.style.border = "0";
});

// Change
textInput.addEventListener("change", function () {
  console.log("Die Maus hat mich geändert");
  textInput.style.border = "0";
});

//Externe EventListener
//Wir können die Funktion auch auslagern, damit wir das ganze genereller halten zu können

const inputFuc = () => {
  console.log("In mich wurde was eingetragen");
  halloOutput.innerHTML = textInput.value;
};

textInput.addEventListener("input", inputFuc);

//Remove
//Wir können auch ein Event wieder removen
//Das funktioniert aber nur wenn wir die Funktion auslagern wie in Zeile 66

textInput.removeEventListener("input", inputFuc);
