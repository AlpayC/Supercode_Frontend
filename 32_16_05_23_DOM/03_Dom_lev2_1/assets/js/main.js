const changeMe = document.querySelector(".active");
const navHome = document.querySelector("#navHome");
console.log(changeMe);
console.log(navHome);
changeMe.addEventListener("click", () => {
  navHome.innerHTML = "emoH";
  navHome.style.backgroundColor = "pink";
  navHome.style.color = "black";
});
