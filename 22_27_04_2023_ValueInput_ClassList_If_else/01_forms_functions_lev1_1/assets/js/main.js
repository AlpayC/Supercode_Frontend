function getInputValue() {
  let number = Number(document.querySelector(".numberinput").value);
  let output = document.querySelector(".output");

  output.innerHTML = number * 2;
}
