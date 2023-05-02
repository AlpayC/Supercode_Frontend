const text = "Sam is going to codingschool";

let text2 = text.replace("codingschool", "school");
let upperCase = text2.toUpperCase();
let lowerCase = text2.toLowerCase();
let samSchool = text2
  .toLowerCase()
  .replace("sam", "SAM")
  .replace("school", "SCHOOL");
let isGoingTo = text2
  .toLowerCase()
  .replace("is", "IS")
  .replace("going", "GOING")
  .replace("to", "TO");
let firstLetter = text2
  .toLowerCase()
  .replace("sam", "Sam")
  .replace("is", "Is")
  .replace("going", "Going")
  .replace("to", "To")
  .replace("school", "School");

console.log(upperCase);
console.log(lowerCase);
console.log(samSchool);
console.log(isGoingTo);
console.log(firstLetter);

document.write(upperCase + "<br>");
document.write(lowerCase + "<br>");
document.write(samSchool + "<br>");
document.write(isGoingTo + "<br>");
document.write(firstLetter + "<br>");
