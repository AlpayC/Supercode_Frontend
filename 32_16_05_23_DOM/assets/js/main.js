// # ==== Collection =======

// * So bekomme ich zugriff auf die einzelnen HTML ELMENENTE
console.log(document.forms);

// hiermit holen wir unsere "loginForm" -> loginForm = name im html;
const loginForm = document.forms.loginForm;

// Holt/Selektiert ganze Collection
console.log(loginForm);

// holt die einzelnen inputfelder als html collection
console.log(loginForm.elements);

// holt den wert von username
console.log(loginForm.elements.username.value);
// console.log(loginForm.elements[0].username.value);

// holt den wert von password
console.log(loginForm.elements.password.value);

// holt das button element
console.log(loginForm.elements.button);

// # ==== Nodelist & HTML Collection ======
// * WICHTIG!
// mit dem querySelectorAll bekommen wir in der regel eine NodeList zurück!
// mit dem getElementByTagName bekommen wir in der regel eine HTML Collection zurück!

const liHTMLCollection = document.getElementsByTagName("li");
const liNodeList = document.querySelectorAll("li");

console.log({ liHTMLCollection });
console.log({ liNodeList });

// # Nodelist vs HTML Collection
// HTML Collection => Live & forEach funktioniert nicht
// Nodelist ==> Static & forEach funktioniert

// wie man aus einem Arraylike ein Array macht:
// const liHTMLCollectionAsArray = Array.from(liHTMLCollection);

// funktioniert nicht
// liHTMLCollection.forEach(element => {
//   console.log(element);
// })

liNodeList.forEach((htmlElement) => {
  console.log(htmlElement);
  htmlElement.innerHTML = "Hallo";
});

// So bekomme ich die einzelene Child Elemente
console.log(document.body.children[0].children);

// So fügen wir was in unser children ein
// ! das hab ich nachträglich noch mit eingefügt
document.body.children[0].innerHTML += "<li> Ich bin ein LI tag </li>";
console.log("childNotes: ", document.body.childNodes);

// So machen wir den Text vom dem Input Feld Email rot.
document.body.children[0].children[1].style.color = "red";

// # === firstElementChild & lastElementChild ===

console.log(document.body.firstElementChild); //gibt die das ERSTE element von deinem HTML zurück
console.log(document.body.lastElementChild); // gibt dir das LETZTE element von deinem HTML zurück

// ! ============== createElement, appendChild==============

// * Element in das HTML einfügen
// 1. erstellt ein Element deiner Wahl, in diesem Fall, "div"
const divElement = document.createElement("div");

// 2. legt Text in dem Element fest
divElement.textContent = "Hallo, ich bin ein Div";

// 3. styled dein element
divElement.style.height = "100px";
divElement.style.backgroundColor = "tomato";
divElement.style.padding = "50px";

// 4. fügt ein element an das ende des body zu //hier kann ich auch ausschen wo das element reingeschoben wir. Aktuell in "body"
document.body.appendChild(divElement);

// * Alternative
// Selection der UL // in der Regel besser den QuerySelector nutzen
const ul = document.body.children[0];

// 4 verschiedene Positionen, beforebegin, afterbegin, afterend, beforend
// insert Element
ul.insertAdjacentElement("afterend", divElement);

// insert Html als String -> Die Methode liest/parsed den String als HTML
const html = `<li>Moin, ich bin ein LI</li>`;
ul.insertAdjacentHTML("afterbegin", html);

console.log({ liHTMLCollection });
console.log({ liNodeList });

// # === forEach & createElement, appendChild ===

const socialMedia = ["facebook", "twitter", "tiktok", "instagram"];

socialMedia.forEach((item) => {
  // Wo soll es erstellt werden
  const element = document.createElement("li");
  // in item sind die Daten gespeichert und werden nun in "listItem" gepusht
  element.innerHTML = item;
  // "ListItem" wird in das html geschoben
  ul.appendChild(element);
});

// # === setAttribute & createElement mit imgs

const imageElement = document.createElement("img");

// hier definiere ich die quelle
imageElement.setAttribute("src", "https://picsum.photos/200");

// hier definiere ich den alt text
imageElement.setAttribute("alt", "random image");

// hier füge ich eine klasse hinzu => bereits vorhandene Klassen werden überschrieben
imageElement.setAttribute("class", "random-class");

document.body.appendChild(imageElement);

// # === setAttribute & forEach mit imgs

const imgSrcArray = [
  "https://picsum.photos/200",
  "https://picsum.photos/201",
  "https://picsum.photos/202",
  "https://picsum.photos/203",
  "https://picsum.photos/204",
  "https://picsum.photos/205",
  "https://picsum.photos/206",
  "https://picsum.photos/207",
  "https://picsum.photos/208",
  "https://picsum.photos/209",
];

// 1. Schleife schreiben
imgSrcArray.forEach((imgSrc) => {
  // 2.createElement erstellen
  const newImg = document.createElement("img");
  // 3. src. Attribut setzen (in "imgSrc" ist der Link verborgen)
  newImg.setAttribute("src", imgSrc);
  // 4. alt. Attribut setzen
  newImg.setAttribute("alt", "random image");
  // 5. in das Document schrieben
  document.body.appendChild(newImg);

  const imgHtml = `<img src=${imgSrc} alt="random image">`;
  document.body.insertAdjacentHTML("afterbegin", imgHtml);
});

// Ingos persönliche Präferenz, eine kleine Auswahl an DOM-Methoden die ich sehr oft nutze

// querySelector -> guckt nach "unten"
// querySelectorAll
// closest -> guckt nach "oben"
// insertAdjacentHtml
// setAttribute
