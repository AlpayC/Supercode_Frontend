// ! Window Objects
// Das Window Object repräsentiert das geöffnete Fenster im Browser
console.log(window);

// # window.alert ()
// Es öffnet sich ein Popup in dem der Text "Hallo Leuete" steht
// window.alert("Hallo Leute");

// # window.prompt()
// Es öffnet sich ein Popup, wo der User etwas eingeben kann
// window.prompt();

// # Um auf die Texteingabe zuzugreifen, müssen wir es in einer Variable speichern
// let returnPrompt = window.prompt("was machst du Heute");
// console.log(returnPrompt);

// # innerHeight
// Werte sind in px
// gibt die Fensterhöhe an
// Browserzeile und Devtools sind nicht inbegriffen
console.log("innerHeight", window.innerHeight);

// # innerWidth
// Werte sind in px
// gibt die Fensterbreite an
// Browserzeile und Devtools sind nicht inbegriffen
console.log("innerWidth", window.innerWidth);

// ! Screen
// Das Screen Object befindet sich im Window Object. Es gibt uns Informationen über den Bildschrim, auf dem sich der Browser befindet
console.log(window.screen);

// # screen.height
// Wir bekommen die Höhe zurück
console.log(window.screen.height);

// # screen.width
// Wir bekommen die Breite zurück
console.log(window.screen.width);

// # screen.availHeight
// Wir bekommen die nutzbare Höhe zurück
console.log(window.screen.availHeight);

// # screen.availWidth
// Wir bekommen die nutzbare Breite  zurück
console.log(window.screen.availWidth);

// # window.open
// mit window.open können wir auf andere Seiten weiterleiten
// wir können nichtmehr auf den Zurückpfeil klicken
// das eignet sich, wenn man von alten Seiten weiterleiten möchte
// mit window.open("https://super-code.de",_blank); wird ein neues Fenster geöffnet, ist Standard
// mit window.open("https://super-code.de", _self); wird im selben Fenster die URL geöffnet

// window.open("https://super-code.de");

// # window.onLoad
// Wenn die Seite geladen wurde, wird in der Konsole dieser Text angezeigt
window.onload = console.log("Die Seite wurde nun geladen");

// # window.scrollTo
// mit der window.scrollTo können wir zu einem bestimmten Punkt der Seite scrollen

document.querySelector("#scroll").addEventListener("click", () => {
  window.scroll(0, 6000);
});

// #window.location
// So bekommen wir die location de Webseite zurück
console.log(window.location);
// So bekommen wir die Domain zurück
console.log(window.location.host);

// So bekommen wir den Pfad zurück
console.log(window.location.pathname);

// # location.reload()
//  Die Seite wird neu geladen
document.querySelector("#reload").addEventListener("click", () => {
  window.location.reload;
});

// # location.replace
//  Die Seite wird umgeleitet
document.querySelector("#redirect").addEventListener("click", () => {
  window.location.replace("https://google.de");
});

// # window.history
console.log(window.history);
document.querySelector("#back").addEventListener("click", () => {
  window.history.back();
});

// ! JS Timing Events

//# setTimeOut()
// Eine Funktion wird erst nach einer Verzögerung ausgeführt

const konsolenAusgabe = () => {
  console.log("Hier steht was in der Konsole");
};

const konsolenAusgabeLoschen = () => {
  console.clear();
};

// Wert 1: Welche Funktion soll ausgeführt werden
// Wert 2:  Nach wievielen Millisekunden soll die Funktion ausgeführt werden
// Hier wird nach 2sek was in der Konsole geschrieben und nach 4 sek gelöscht
// setTimeout(konsolenAusgabe, 2000);
// setTimeout(konsolenAusgabeLoschen, 4000);

//# setInterval()
// Wir können eine Funktion einem bestimmten Invertvall wieder ausführen lassen
// setInterval(konsolenAusgabe, 1000);

// # clearInterval
// löscht ein Intervall wieder
// Wir müssen das SetIntervall() in einer Variable speichern
const interval = setInterval(konsolenAusgabe, 1000);
document.querySelector("#clear").addEventListener("click", () => {
  clearInterval(interval);
});

// So kann man eine SetInterval in eine Callback Funktion schreiben
// Neu
setInterval(() => {
  console.log("hallöchen");
}, 1000);
// alt
setInterval(function () {
  console.log("hallöchen 2");
}, 1000);
