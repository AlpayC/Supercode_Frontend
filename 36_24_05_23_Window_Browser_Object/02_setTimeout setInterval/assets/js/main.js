const loader = document.querySelector(".zeit");

let counter = 100;

document.querySelector("#btn").addEventListener("click", () => {
  const countdown = () => {
    counter--;
    if (counter < 0) {
      clearInterval(interval);
    } else {
      loader.innerHTML = counter + " %";
    }
  };
  const interval = setInterval(countdown, 100);
});
