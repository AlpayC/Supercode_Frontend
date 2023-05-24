let counter = Number(document.getElementById("count").innerHTML) - 1;
let counterValue = document.getElementById("count");
const message = document.getElementsByClassName("message")[0];

const konsolenAusgabe2 = () => {
  if (counter == 0) {
    clearInterval(interval);
    counterValue.innerHTML = "00";
    message.classList.add("messageoff");
  } else {
    counterValue.innerHTML = "0" + counter--;
  }
};

const interval = setInterval(konsolenAusgabe2, 1000);
