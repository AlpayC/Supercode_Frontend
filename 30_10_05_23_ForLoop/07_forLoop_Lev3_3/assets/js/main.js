function addO() {
  let output = document.querySelector(".output");
  let numberInput = parseInt(document.querySelector("#num").value);
  let newArray = ["L"];

  if (numberInput === 0) {
    output.innerHTML = "ERROR";
    return;
  }

  for (let i = 0; i < numberInput; i++) {
    if (numberInput % 2 === 0) {
      newArray += "o";
    } else {
      if (i % 2 === 0) {
        newArray += "o";
      } else {
        newArray += "0";
      }
    }
  }

  newArray += "p";
  output.innerHTML = newArray;
}
