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

const output2 = document.querySelector(".shishacomment");
function greaterThan() {
  const age = Number(document.querySelector("#input").value);
  let altersGrenze2 = 18;
  if (age >= altersGrenze2) {
    output2.innerHTML = "Ja, du darfst Shisha rauchen";
    console.log(output);
  } else {
    output2.innerHTML = "Nein, du darfst keine Shisha rauchen";
  }
}
