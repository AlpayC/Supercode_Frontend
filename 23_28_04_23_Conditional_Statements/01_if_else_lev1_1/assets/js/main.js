const output = document.querySelector(".outputifelse");

function adult() {
  const age = Number(document.querySelector("#ageInput").value);
  let altersGrenze = 18;
  if (age >= altersGrenze) {
    output.innerHTML = "<p>volljährig</p>";
    console.log(output);
  } else if (age < altersGrenze) {
    output.innerHTML = "<p>minderjährig</p>";
  } else {
    output.innerHTML = "<p>volljährig</p>";
  }
}
