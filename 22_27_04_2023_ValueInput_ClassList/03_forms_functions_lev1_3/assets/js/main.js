function getInputValue() {
  let age1 = Number(document.querySelector(".age1").value);
  let age2 = Number(document.querySelector(".age2").value);
  let output = document.querySelector(".output");

  output.innerHTML = age1 - age2;
}
