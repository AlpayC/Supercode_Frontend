function getInputValue() {
  let age = Number(document.querySelector(".year").value);
  let output = document.querySelector(".output");
  let actualDate = new Date().getFullYear();
  output.innerHTML = actualDate - age;
}
