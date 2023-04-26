// Comparison

console.log(2=="2"); //vergleicht Werte mit zwei Gleichzeichen
console.log(2==="2"); //vergleicht Werte und Datentypen mit drei Gleichzeichen

console.log(1==1); //true
console.log(1==2); //false
console.log("5"==5); //true
console.log(1=="1"); //true
console.log(7=="6"); //false

// - != nicht gleicher Wert
// - !== nicht gleicher Wert und Datentyp

console.log(3 !=3); //false
console.log(3 !== 3); //false
console.log(4 !=="4"); //true

// - > größer als 
// - < kleiner als 
// - <= kleiner gleich als 
// - >= größer gleich als 

console.log(3 > 2); //true
console.log(4 < 6); //true
console.log(4 >= 6); //false

console.log("B" > "A"); //true
console.log("B" > "a"); //false

// Elemente selektieren

// getElementbyId()
const mainHeadline = document.getElementById("headline")
console.log(mainHeadline);

// querySelector()

const secondaryHeadline = document.querySelector(".wo")
console.log(secondaryHeadline);

// .innerHTML

console.log(mainHeadline.innerHTML);

// Elemente überschreiben

mainHeadline.innerHTML = "CELIK";

secondaryHeadline.innerHTML ="blabla"
secondaryHeadline.innerHTML +="blabla"

mainHeadline.style.color = "red";
mainHeadline.style.backgroundColor = "yellow";


// Funktionen

function sayHi(){
    console.log("Hallo Alpay");
}

sayHi();

// Funktionen mit Parameter

function sayHello(firstName){
    console.log("Hello " + firstName);
}
sayHello("Magda");

function addMe(zahl1, zahl2){
console.log(zahl1 * zahl2);
}

addMe(2,4)

let title=document.querySelector("h2")

function multiplyMe (zahl1, zahl2, zahl3){
    title.innerHTML += "<h4>" + (zahl1*zahl2*zahl3) + "</h4>";
}

multiplyMe (2,5,5);
multiplyMe (2,5,5);
