console.log("Start Waren für 3 Sekunden");

const konsolenAusgabe = () => {
  console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
};
setTimeout(konsolenAusgabe, 3000);

let counter = 11;

const konsolenAusgabe2 = () => {
  counter--;
  if (counter < 1) {
    clearInterval(interval);
    console.log("Geschafft. Wir haben Feierabend");
  } else {
    console.log(counter);
  }
};

const interval = setInterval(konsolenAusgabe2, 1000);
