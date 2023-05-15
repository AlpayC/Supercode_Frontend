const btn = document.querySelector("#button");
const farbAuswahl = document.querySelector("#farbeAuswahlen");
const body = document.querySelector("body");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  let color = farbAuswahl.value;
  let selectedOption = farbAuswahl.options[farbAuswahl.selectedIndex];
  body.style.backgroundColor = color.replace(" ", "");
  selectedOption.style.backgroundColor = color.replace(" ", "");
});
