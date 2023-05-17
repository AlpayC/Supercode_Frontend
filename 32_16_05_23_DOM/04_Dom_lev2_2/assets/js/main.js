document.addEventListener("keydown", (event) => {
  const keyCode = document.querySelector(".input-field");
  const keyCodeDiv = document.querySelector(".keyCode");
  const keyDiv = document.querySelector(".key");
  const codeDiv = document.querySelector(".code");
  const name = event.key;
  const code = event.code;
  const num = event.which;

  keyCode.innerHTML = num;

  keyDiv.innerHTML = name;
  keyCodeDiv.innerHTML = num;
  codeDiv.innerHTML = "Key" + name.toUpperCase();
});
