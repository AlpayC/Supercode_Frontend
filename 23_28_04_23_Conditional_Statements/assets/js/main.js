let age = 17;

if (age >= 18) {
  console.log("Du bist volljährig");
} else {
  console.log("Du bist minderjährig");
}

// Check Number Function

function checkNumber() {
  const inputNumber = Number(document.querySelector(".num").value);
  const output = document.querySelector(".outputifelse");

  if (inputNumber > 0) {
    output.innerHTML = "Die Zahl ist positiv";
  } else if (inputNumber == 0) {
    output.innerHTML = "Die Zahl ist 0";
  } else {
    output.innerHTML = "Die Zahl ist negativ";
  }
}
let username = "Alpay";
let password = "hallo";

function checkUserData() {
  let loginUserName = document.querySelector("#username").value;
  let loginUserPass = document.querySelector("#password").value;
  const output = document.querySelector(".login-feedback");

  if (username == loginUserName && password == loginUserPass) {
    output.innerHTML = "<p class='green'> Login war erfolgreich </p>";
    window.location.replace("./secret.html");
  } else {
    output.innerHTML = "<p class='red'> Login ist fehlgeschlagen </p>";
  }
}
