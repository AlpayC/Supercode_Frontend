// # Date Objects
// mit newDate() erstellen wir eine neues Date Object
// Start am 1.1.1970

// ? Wenn wir kein Parameter mitgeben, bekommen wir die aktuelle Zeit + Dateum
let date1 = new Date();
console.log(date1);
console.log(typeof date1);
// Geht nicht weil kein Strin
// console.log (date1.toUpperCase())

// ? Wenn wir Parameter mitgeben, wird ein Object mit den durchgereichten Zeiten erstellt
// Monat Index startet bei 0 = Jan

let date2 = new Date(1994, 4, 30, 12, 11, 24);
console.log(date2);
console.log(typeof date2);

// ? Wenn wir date1-date2 rechnen, bekommen wir die Millisekunden, die zwischen den beiden Zeiten liegt
let date3 = date1 - date2;
console.log(date3);

// ? Die .toString() Methode wandelt Date Object in einen String
let date4 = date1.toString();
console.log(date4);
console.log(typeof date4);
// Jetzt kann ich auch die String Methoden benutzen, weil String vor konvertiert wurde
console.log(date4.toUpperCase());

// ? toUTCString() - gibt ein Datum in UTC Zeit zurück
// UTC : The  Universal Coordinated ist der Standard bei Weltuhren
let date5 = date1.toUTCString();
console.log(date5);

// ? toLocaleDateString() - gibt ein Datum in einer lokalisierten Darstellung zurück
let date6 = new Date().toLocaleDateString();
console.log(date6);

// # GET
// Wir bekommen die Millisekunden seit dem 1.1.1970 0:00 Uhr zurück
date7 = date1.getTime();
console.log(date7);

// ? getFullYear() -  gib uns nur das Jahr zurück
let date8 = date1.getFullYear();
console.log(date8);

// ? getMonth() - gib uns nur den Monat zurück
// Wir bekommen den Index !!!! des Monats zurück - Start ist bei  0 !
let date9 = date1.getMonth();
console.log(date9);

// ? getDate() - gib uns zurück, welchen Tag wir aktuell haben

let date10 = date1.getDate();
console.log(date10);

// ? getMinutes () - gib uns die Minuten zurück

let date11 = date1.getMinutes();
console.log(date11);

// ? getSeconds() - gib uns die aktuellen Sekunden aus

let date12 = date1.getSeconds();
console.log(date12);

// ? getMilliseconds() - gib uns die aktuellen Millisekunden zurück
let date13 = date1.getMilliseconds();
console.log(date13);

// ? getHours() - gibt uns die aktuelle Stunde zurück
let date14 = date1.getHours();
console.log(date14);

// ? getDay() - gib uns den heutigen Tag zurück
// Startet auch wie beim Index bei 0. Sonntag ist 0, Montag ist 1 usw
let date15 = date1.getDay();
console.log(date15);

// # SET
// Mit Set werden Datumsangaben überschrieben

// ? setMonth() - können wir das Tagesdatum bestimmen
// Max zahl ist 31.
console.log("Ausgangsdatum: ", date2);
date2.setMonth(3);
console.log(date2);

// ? setFullYear()

date2.setFullYear(2001);
console.log(date2);

// ? Namen von Wochentag rausbekommen
// -narrow: gibt uns den Wochentag als einzelnen Buchstaben zurück
// -short:  gibt usn den Wochentag in kurz raus
// -long:  gibt usn den Wochentag in lang raus
let dateObj = new Date();
let weekday = dateObj.toLocaleString("default", { weekday: "long" });
console.log(weekday);
