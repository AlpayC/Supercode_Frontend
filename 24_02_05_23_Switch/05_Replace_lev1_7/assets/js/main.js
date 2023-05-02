let text = "Sam is good at codingschool";
text = text.replace("codingschool", "school");
const textSchool = text;

const txtReplaceBad = textSchool.replace("good", "bad");
const txtReplaceSusi = textSchool.replace("Sam", "Susi");
const txtReplaceTennis = textSchool.replace("school", "tennis");

console.log(txtReplaceBad);
console.log(txtReplaceSusi);
console.log(txtReplaceTennis);

document.write(txtReplaceBad + "<br>");
document.write(txtReplaceSusi + "<br>");
document.write(txtReplaceTennis + "<br>");
