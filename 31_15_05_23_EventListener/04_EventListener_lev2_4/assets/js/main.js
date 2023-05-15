const btn = document.querySelector("#button");
const farbAuswahl = document.querySelector("#farbeAuswahlen");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  event.preventDefault();
  let color = farbAuswahl.value;
  body.style.backgroundColor = "" + color.replace(" ", "") + "";
});
// farbAuswahl.remove(farbAuswahl.selectedIndex);
//   farbAuswahl.selectedIndex.remove(farbAuswahl);
//   changeTxt.replace(" ", "");
//   console.log(changeTxt.value);

//   body.style.backgroundColor = "";
// });
// farbAuswahl.remove(farbAuswahl.selectedIndex);
