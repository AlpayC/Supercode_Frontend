const myList = document.querySelector("#myList");
const btns = document.querySelector(".unten");

const output = document.querySelector("output");

const btnOne = btns.firstElementChild;

const btnTwo = btnOne.nextSibling.nextSibling.nextSibling;

const btnThree = btnTwo.nextSibling.nextSibling.nextSibling;

const btnFour = btnThree.nextSibling.nextSibling.nextSibling;

btnOne.addEventListener("click", () => {
  output.innerHTML = myList.firstElementChild.textContent;
});
btnTwo.addEventListener("click", () => {
  output.innerHTML = myList.lastElementChild.textContent;
});
btnThree.addEventListener("click", () => {
  output.innerHTML = myList.firstElementChild.nextElementSibling.textContent;
});
btnFour.addEventListener("click", () => {
  output.innerHTML = myList.lastElementChild.previousElementSibling.textContent;
});
