// Arrays

// Vorher
let gericht1 = "Döner";
let gericht2 = "Pfannkuchen";
let gericht3 = "Pasta";

// Nachher

let magdasLieblingsGerichte = ["Pfannkuchen", "Döner", "Pasta", true, 2023];

console.log(magdasLieblingsGerichte);
// Arrays fängt immer bei dem Index 0 drin, Die Aufzählung length gibt aber 5 an

//  index: Mit der Indexzahl wählen wir den Datentypen gemäß length aus. In den [] kommt die Zahl rein auf welches Element man sich beziehen möchte. Fängt immer bei 0 an.

console.log(magdasLieblingsGerichte[2]); //Pasta
console.log(magdasLieblingsGerichte[0]); //Pfannkuchen
console.log(magdasLieblingsGerichte[4]); //2023

// indexOf(): Zeigt die Position der gesuchten Value in der Variable an. Sucht in einem Array nach dem Suchwort und gibt dir den Indexwert als Nr zurück.
console.log(magdasLieblingsGerichte.indexOf("Döner")); // Pos 2
console.log(magdasLieblingsGerichte.indexOf("Döner2")); // false -1

// Werte überschreiben in einem Array

//Statisch
magdasLieblingsGerichte[1] = "Salat";
console.log(magdasLieblingsGerichte);

//Dynamisch

console.log(magdasLieblingsGerichte.indexOf("Pasta"));
magdasLieblingsGerichte[magdasLieblingsGerichte.indexOf("Pizza")] = "Nudeln";
console.log(magdasLieblingsGerichte.indexOf("Pasta"));

//Length : fängt ab 1 an
// gibt uns die Länge von einem Array als Number zurück
console.log(magdasLieblingsGerichte.length);

let superTrainer = ["Magda", "Ahmed", "Christian", "Julia", "Marzio"];
console.log(superTrainer);

//pop()
// Die pop() Methode entfernt das letzte Element in einem Array und gibt den Wert, des gelöschten Elementes zurück

let popSuperTrainer = superTrainer.pop();
console.log(superTrainer); //Marzio ist hier aus dem Array gelöscht
console.log(popSuperTrainer); //Marzio wurde hier zurückgegeben

//push()
// Die push() Methode fügt an der letzten Stelle ein Element hinzu und gibt die neue Länge zurück length

let pushSuperTrainer = superTrainer.push("Ingo");
console.log(pushSuperTrainer); //Ingo wurde dem Array hinzugeüft und es wird die Länge des Array zurückgegeben
console.log(superTrainer); // Ingo wurde nun zurückgegeben

//shift()
// Die shift() Methode entfernt das erste Element in einem Array und gibt den Wert des Elementes zurück
let shiftSuperTrainer = superTrainer.shift();
console.log(shiftSuperTrainer); //der erste Wert ist Magda wird entfernt
console.log(superTrainer); //Array fängt dann bei dem zweiten Wert an

//unshift ()
// Die unshift() Methode fügt an der ersten Stelle und gibt den Wert des Elementes zurück
let unshiftSuperTrainer = superTrainer.unshift("Sebastian");
console.log(unshiftSuperTrainer); //der erste Wert ist Sebastian und wird hinzugefügt. Die neue Länge ist 5
console.log(superTrainer); //Array fängt dann bei dem ersten neuen Wert an
