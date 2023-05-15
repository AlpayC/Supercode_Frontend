const btn = document.querySelector("#clickMe");

let Anzahl = 0; // Es ist wichtig, hier zu initiieren!
console.log(Anzahl);
btn.addEventListener("click", () => {
  Anzahl += 1;
  btn.innerHTML = "Click me: " + Anzahl;
  console.log(Anzahl);
});
