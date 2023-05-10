function addO() {
  let output = document.querySelector(".output");
  let numberInput = document.querySelector("#num").value;
  let newArray = ["L"];

  for (let i = 0; i <= numberInput; i++) {
    newArray += "o";
  }
  newArray += "p";
  output.innerHTML = newArray;
}
