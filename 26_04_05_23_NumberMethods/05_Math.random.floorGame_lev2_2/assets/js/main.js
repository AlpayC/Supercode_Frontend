function errateMeineZahl() {
  let pcNum = Math.floor(Math.random() * 10 + 1);
  let promptOutput = prompt("Schätzen Sie eine Zahl zwischen 1 und 10", "");
  const pcInput = document.querySelector(".pcnumber");
  const userInput = document.querySelector(".usernumber");
  const output = document.querySelector(".output");
  if (promptOutput >= 11) {
    alert("Bitte gebe eine Zahl unter 10 ein");
  } else if (promptOutput == pcNum) {
    console.log("Du hast richtig geraten. Die Nummer lautet " + pcNum);
    pcInput.innerHTML = pcNum;
    userInput.innerHTML = promptOutput;
    output.innerHTML = "<span class ='right'> RICHTIG </span>";
  } else {
    console.log("Du hast falsch geraten. Die Nummer lautet " + pcNum);
    pcInput.innerHTML = pcNum;
    userInput.innerHTML = promptOutput;
    output.innerHTML = "<span class ='false'> FALSCH </span>";
  }
}
