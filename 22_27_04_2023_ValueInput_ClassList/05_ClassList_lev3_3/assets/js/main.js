function changeBackground() {
  let red = document.getElementById("redslider").value;
  let green = document.getElementById("greenslider").value;
  let blue = document.getElementById("blueslider").value;
  let bg = "rgb(" + red + "," + green + "," + blue + ")";

  document.body.style.backgroundColor = bg;
  let output = document.querySelector(".output");
  output.innerHTML = bg;
}
