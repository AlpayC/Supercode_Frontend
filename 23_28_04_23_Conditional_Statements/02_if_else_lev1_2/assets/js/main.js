const output = document.querySelector(".outputifelse");

function weather() {
  const quality = Number(document.querySelector("#qualityInput").value);

  if (quality <= 10 && quality >= 8) {
    output.innerHTML = "super";
  } else if (quality <= 7 && quality >= 6) {
    output.innerHTML = "gut";
  } else if (quality <= 5 && quality >= 3) {
    output.innerHTML = "okay";
  } else {
    output.innerHTML = "schlecht";
  }
}
