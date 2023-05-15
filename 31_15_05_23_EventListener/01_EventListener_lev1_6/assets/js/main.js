const textInput = document.querySelector("#text-input");
const mySelect = document.querySelector("#my-select");

mySelect.addEventListener("change", function () {
  console.log("Die Maus hat mich geändert");
  textInput.innerHTML = "Sie haben ausgewählt " + mySelect.value;
});
