function changeHeadline() {
  let title = document.querySelector("h1");
  title.classList.add("headlinestyling");
  console.log(title.classList);
}
function resetHeadline() {
  let title = document.querySelector("h1");
  title.classList.remove("headlinestyling");
  console.log(title.classList);
}
