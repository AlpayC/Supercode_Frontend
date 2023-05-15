const btn = document.querySelector("#button");
const farbAuswahl = document.querySelector("#farbeAuswahlen");

btn.addEventListener("click", () => {
  event.preventDefault();
  farbAuswahl.remove(farbAuswahl.selectedIndex);
});
